// plop/utils/cases.ts
function cases_default(_identifier, _obj) {
  let obj = _obj ?? _identifier;
  let identifier = _obj ? _identifier : "__";
  const add_hooks = (obj2) => {
    return Object.keys(obj2).reduce((prev, match) => {
      return obj2[match].match(/{{ \.\.\..* }}/) ? prev : {
        ...prev,
        [match]: `{{ ...${match} }}`
      };
    }, {});
  };
  const hooks = add_hooks(obj);
  return Object.keys(obj).reduce((prev, k, i) => {
    const key = k;
    const _resolve = {
      [key]: (name) => {
        let str = obj[key];
        str.match(/{{ \.\.\..* }}/) && Object.keys(hooks).forEach((key2) => {
          str = str.replace(
            hooks[key2],
            str
          );
        });
        return name ? str.replace(identifier, name) : str;
      }
    };
    return { ...prev, ..._resolve };
  }, {});
}

// plop/generator/filenames.ts
var myFiles = {
  folder: "{{ snakeCase __ }}",
  actions: "actions.ts",
  filenames: "filenames.ts",
  prompts: "prompts.ts",
  settings: "settings.ts",
  template: "template.ts",
  generator: "{{ snakeCase __ }}.hbs",
  transform: "{{ snakeCase __ }}.ts"
};
var cases = cases_default("__", myFiles);
var cases_without_extension = Object.keys(cases).reduce(
  (p, k) => {
    const str = cases[k]().replace(/}}\.[^\s]*/g, "}}");
    const _str = cases[k]().replace(/\.[^\s]*/g, "");
    if (cases[k]().match("}}")) {
      return { ...p, ["_" + k]: str };
    } else {
      return { ...p, ["_" + k]: _str };
    }
  },
  {}
);
var filenames_default = {
  ...cases,
  ...cases_default(cases_without_extension)
};

// plop/utils/case_modifiers.ts
var cleanStr = (str) => {
  const _str = str.replace(/[^\w\s]/g, "");
  const _strMatch = _str.match(
    /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
  );
  return _strMatch;
};
var case_modifiers_default = {
  camelCase: (text) => {
    function camelize_(text2) {
      text2 = text2.replace(
        /[-_\s.]+(.)?/g,
        (_, c) => c ? c.toUpperCase() : ``
      );
      return text2.substring(0, 1).toLowerCase() + text2.substring(1);
    }
    text = text.replace(/[^\w\s]/g, "").replace(/[^a-zA-Z0-9$_\-\s.]/g, "").replace(/^[0-9_\-\s.]+/, "");
    return camelize_(text);
  },
  clean: (str) => {
    const _str = cleanStr(str);
    const _strResolve = _str && _str.map((x) => x.toLowerCase()).join(" ");
    return _strResolve;
  },
  snakeCase: (str) => {
    const _str = cleanStr(str);
    const _strResolve = _str && _str.map((x) => x.toLowerCase()).join("_");
    return _strResolve;
  },
  constantCase: (str) => {
    const _str = cleanStr(str);
    const _strResolve = _str && _str.map((x) => x.toUpperCase()).join("_");
    return _strResolve;
  },
  properCase: (str) => {
    return `${str}`.toLowerCase().replace(/[-_]+/g, " ").replace(/[^\w\s]/g, "").replace(
      /\s+(.)(\w*)/g,
      ($1, $2, $3) => `${$2.toUpperCase() + $3}`
    ).replace(new RegExp(/\w/), (s) => s.toUpperCase());
  }
};

// plop/config/format_hooks.ts
function format_hooks(obj) {
  const output = { ...obj };
  const keys = Object.keys(output);
  Object.keys(output).forEach((k) => {
    const isMany = Array.isArray(output[k]);
    const variables = output[k];
    isMany ? variables.map((input, index) => {
      keys.forEach((key) => {
        const regex = new RegExp(`{{ ...${key} }}`, "g");
        const isMany2 = Array.isArray(output[key]);
        const variables2 = output[key];
        variables2[index].match(regex) && (variables2[index] = input.replace(
          regex,
          isMany2 ? variables2.join("") : output[key]
        ));
      });
    }) : (() => keys.forEach((key) => {
      const regex = new RegExp(`{{ ...${key} }}`, "g");
      const _variable = Array.isArray(output[key]) ? output[key].join("") : output[key];
      const variable = output[k];
      variable.match(regex) && (output[k] = variable.replace(
        regex,
        _variable
      ));
    }))();
  });
  console.log(output);
  return output;
}

// plop/utils/handle_spaces.ts
var handle_spaces_default = (index, maxLength, array, start, between, end, onlyOne) => {
  return index === 0 ? maxLength !== 1 ? start : onlyOne : maxLength === index + 1 ? end : between;
};

// plop/config/formater.ts
function build_my_plop(obj) {
  const single_inputs = {};
  Object.keys(obj.input).forEach((input) => {
    if (!Array.isArray(obj.input[input])) {
      single_inputs[input] = obj.input[input];
    }
  });
  const resolve3 = format_hooks(
    _formater(obj.config, single_inputs)
  );
  obj.custom && (resolve3.custom = obj.custom);
  return resolve3;
}
function _formater(obj, single_inputs) {
  const resolve3 = {};
  Object.keys(obj).forEach((k) => {
    if (Array.isArray(obj[k].input[0])) {
      let outputs = [];
      const variables = obj[k].input[0];
      variables.map((_input, index) => {
        const _output = formater(
          {
            ...obj[k],
            input: _input
          },
          {
            ...single_inputs,
            [obj[k].input[1]]: _input
          }
        );
        _output && outputs.push(_output);
      });
      resolve3[k] = outputs.length > 0 ? outputs.reduce((prev, output, index) => {
        const resolve4 = handle_spaces_default(
          index,
          outputs.length,
          outputs,
          obj[k].spaces.start.replace(
            /{{}}/,
            output
          ),
          obj[k].spaces.between.replace(
            /{{}}/,
            output
          ),
          obj[k].spaces.end.replace(
            /{{}}/,
            output
          ),
          obj[k].spaces.onlyOne.replace(
            /{{}}/,
            output
          )
        );
        return [...prev, resolve4];
      }, []).join("") : "";
    } else {
      resolve3[k] = formater(
        {
          ...obj[k],
          input: obj[k].input[0]
        },
        single_inputs
      );
    }
  });
  obj.custom && (resolve3.custom = obj.custom);
  return resolve3;
}
function formater(obj, inputs) {
  let resolve3;
  let stages = {
    stage_0: (x) => x,
    stage_1: (x) => x,
    stage_2: (x) => x,
    stage_3: (x) => x
  };
  let keys_of_match = [];
  resolve3 = obj.default ?? "";
  obj.match && obj.match.map((match) => {
    keys_of_match.push(match.key);
    if (match.key && obj.input.match(match.key)) {
      match.value && typeof match.value === "string" && (resolve3 = match.value);
      match.stages && (stages = {
        ...stages,
        ...match.stages
      });
    }
  });
  Object.keys(inputs).forEach((input) => {
    for (const [modifier, func] of Object.entries(
      case_modifiers_default
    )) {
      const regex = new RegExp(
        `{{ ${modifier} ${input} }}`,
        "g"
      );
      if (resolve3.match(regex)) {
        const output = stages.stage_2(
          func(
            stages.stage_1(stages.stage_0(inputs[input]))
          )
        );
        resolve3 = stages.stage_3(
          resolve3.replace(regex, output)
        );
      }
    }
  });
  return resolve3;
}

// plop/generator/settings.ts
var settings_default = (var_) => {
  const cases3 = {
    name: "{{ snakeCase __ }}",
    files: "{{ snakeCase __ }}",
    inputs: "{{ snakeCase __ }}",
    cases: "{{ snakeCase __ }}",
    transform_files: "transform_{{ snakeCase __ }}"
  };
  const c = cases_default("__", cases3);
  const config = {
    getPaths: {
      input: [var_.files.split(","), "files"],
      default: `
	{
		...getPaths('${c.files(
        "files"
      )}', false)
	},`,
      spaces: {
        start: "{{}}",
        between: "{{}}",
        end: "{{}}",
        onlyOne: "{{}}"
      }
    },
    getPathsWithCustomize: {
      input: [var_.files.split(","), "files"],
      default: `
	{
		...getPaths('${c.files(
        "files"
      )}', 'has_${c.files("files")}'),
	},`,
      spaces: {
        start: "{{}}",
        between: "{{}}",
        end: "{{}}",
        onlyOne: "{{}}"
      },
      match: [
        {
          stages: {
            stage_3(v) {
              return v.replace("*{*{*", "{{");
            }
          }
        }
      ]
    },
    fileNames: {
      input: [var_.files.split(","), "files"],
      default: `
	${c.files("files")}: '${c.files(
        "files"
      )}.ts',`,
      spaces: {
        start: `
	folder: '{{ snakeCase __ }}',{{}}`,
        between: "{{}}",
        end: "{{}}",
        onlyOne: "{{}}"
      }
    },
    importTransform: {
      input: [var_.files.split(","), "files"],
      default: `
import ${c.transform_files(
        "files"
      )} from './template/transform/${c.files("files")}'`,
      spaces: {
        start: "{{}}",
        between: "{{}}",
        end: "{{}}",
        onlyOne: "{{}}"
      }
    },
    transform: {
      input: [var_.files.split(","), "files"],
      default: `	static ${c.files(
        "files"
      )}(doc: string) {
		return ${c.transform_files(
        "files"
      )}(doc, Transform)
	}`,
      spaces: {
        start: "{{}}\n\n",
        between: "{{}}\n\n",
        end: "{{}}",
        onlyOne: "{{}}"
      }
    },
    inputsTransform: {
      input: [var_.inputs.split(","), "inputs"],
      default: `
		${c.inputs("inputs")}: '',`,
      spaces: {
        start: "{{}}",
        between: "{{}}",
        end: "{{}}",
        onlyOne: "{{}}"
      }
    },
    hasInputs: {
      input: [var_.inputs.split(","), "inputs"],
      default: `
		has_${c.inputs("inputs")}: false,`,
      spaces: {
        start: "{{}}",
        between: "{{}}",
        end: "{{}}",
        onlyOne: "{{}}"
      }
    },
    hasFileInputs: {
      input: [var_.files.split(","), "files"],
      default: `
		has_${c.files("files")}: false,`,
      spaces: {
        between: "{{}}",
        end: "{{}}",
        onlyOne: "{{}}",
        start: "{{}}"
      }
    },
    cases: {
      input: [var_.inputs.split(","), "inputs"],
      default: `
		${c.cases(
        "inputs"
      )}: '{{ snakeCase __ }}',`,
      spaces: {
        start: `
		name: '{{ snakeCase __ }}',{{}}`,
        between: "{{}}",
        end: "{{}}",
        onlyOne: `
		name: '{{ snakeCase __ }}',{{}}`
      }
    },
    inputsSettings: {
      input: [var_.inputs.split(","), "inputs"],
      default: `
			${c.inputs(
        "inputs"
      )}: var_.${c.inputs("inputs")},`,
      spaces: {
        start: "{{}}",
        between: "{{}}",
        end: "{{}}",
        onlyOne: "{{}}"
      }
    },
    commentsSettings: {
      input: [var_.files.split(","), "files"],
      default: `
			// ** ${c.files("files")}`,
      spaces: {
        start: "{{}}",
        between: "{{}}",
        end: "{{}}",
        onlyOne: "{{}}"
      }
    },
    inputsPrompt: {
      input: [var_.inputs.split(","), "inputs"],
      default: `
  {
    type: 'input',
    name: '${c.inputs("inputs")}',
    message: '${c.inputs("inputs")}: ',
    filter: (input) => {
      Transform.Var.${c.inputs("inputs")} = input
      Transform.Var.has_${c.inputs("inputs")} = !!input
      return input
    },
  },`,
      spaces: {
        start: "{{}}",
        between: "{{}}",
        end: "{{}}",
        onlyOne: "{{}}"
      }
    },
    typesInput: {
      input: [var_.inputs.split(","), "inputs"],
      default: `	${c.inputs(
        "inputs"
      )}: string
	has_${c.inputs("inputs")}: boolean`,
      spaces: {
        start: "\n{{}}",
        between: "\n{{}}",
        end: "\n{{}}",
        onlyOne: "\n{{}}"
      },
      match: [
        {
          key: "has",
          value: `	${c.inputs("inputs")}: string`
        }
      ]
    },
    customize_files_choice_types: {
      input: [var_.files.split(","), "files"],
      default: `
	has_${c.files("files")}: boolean`,
      spaces: {
        between: "{{}}",
        end: "{{}}",
        onlyOne: "{{}}",
        start: "{{}}"
      }
    },
    customize_files_choices: {
      input: [var_.files.split(","), "files"],
      default: `
	'${c.files("files")}'`,
      spaces: {
        between: "{{}},",
        end: "{{}}",
        onlyOne: "{{}}",
        start: "{{}},"
      }
    },
    customize_files_filter: {
      input: [var_.files.split(","), "files"],
      default: `
      if (input.indexOf('${c.files("files")}') > -1) {
        Transform.Var.has_${c.files("files")} = true
        answers.has_${c.files("files")} = 'true'
      }`,
      spaces: {
        between: "{{}}",
        end: "{{}}",
        onlyOne: "{{}}",
        start: "{{}}"
      }
    },
    customize_files: {
      input: [var_.files, "name"],
      default: `
  {
    type: 'checkbox',
    message: 'Quais arquivos devem ser criados?',
    name: 'customizeFiles',
    choices: [{{ ...customize_files_choices }},
    ],
    filter: (input: string[], answers: Record<string, any>) => {
      {{ ...customize_files_filter }}
      return input
    },
  },
      `
    }
  };
  const resolve3 = {
    custom: {},
    input: {
      name: var_.name,
      files: var_.files,
      inputs: var_.inputs
    },
    config
  };
  return resolve3;
};

// plop/generator/template/transform/actions.ts
var actions_default = (x, t) => {
  console.log(t.start);
  const { getPaths: getPaths3, getPathsWithCustomize } = t.start;
  let doc = x;
  doc = doc.replace(
    /__getPaths__/,
    t.Var.hasCustomizeFiles ? getPathsWithCustomize : getPaths3
  );
  return doc;
};

// plop/generator/template/transform/filenames.ts
var filenames_default2 = (x, t) => {
  const { fileNames } = t.start;
  let doc = x;
  doc = doc.replace("__fileNames__", fileNames);
  return doc;
};

// plop/generator/template/transform/prompts.ts
var prompts_default = (x, t) => {
  const {
    inputsPrompt,
    typesInput,
    customize_files,
    customize_files_choice_types
  } = t.start;
  let doc = x;
  doc = doc.replace(
    /__inputs__/,
    t.Var.hasInputs ? inputsPrompt : ""
  );
  doc = doc.replace(
    /__typesInput__/,
    t.Var.hasInputs ? typesInput : ""
  );
  doc = doc.replace(
    /__customizeFiles__/g,
    t.Var.hasCustomizeFiles ? customize_files : ""
  );
  doc = doc.replace(
    /__customizeChoiceTypes__/g,
    t.Var.hasCustomizeFiles ? customize_files_choice_types : ""
  );
  return doc;
};

// plop/generator/template/transform/settings.ts
var settings_default2 = (x, t) => {
  const { cases: cases3, inputsSettings, commentsSettings } = t.start;
  let doc = x;
  doc = doc.replace(
    /__cases__/,
    t.Var.hasInputs ? cases3 : `
		name: '{{ snakeCase __ }}',`
  );
  doc = doc.replace(
    /__inputs__/,
    t.Var.hasInputs ? inputsSettings : ""
  );
  doc = doc.replace(/__comments__/, commentsSettings);
  return doc;
};

// plop/generator/template/transform/template.ts
var template_default = (x, t) => {
  const {
    importTransform,
    transform,
    inputsTransform,
    hasInputs,
    hasFileInputs
  } = t.start;
  let doc = x;
  doc = doc.replace(/__import_transform__/, importTransform);
  doc = doc.replace(/__transform__/, transform);
  doc = doc.replace(
    /__inputs__/,
    t.Var.hasInputs ? inputsTransform : ""
  );
  doc = doc.replace(
    /__hasInputs__/,
    t.Var.hasInputs ? hasInputs : ""
  );
  doc = doc.replace(
    /__hasFileInputs__/,
    t.Var.hasInputs ? hasFileInputs : ""
  );
  return doc;
};

// plop/generator/template/transform/generator.ts
var generator_default = (x, t) => {
  let doc = x;
  return doc;
};

// plop/generator/template/transform/transform.ts
var transform_default = (x, t) => {
  let doc = x;
  return doc;
};

// plop/generator/template.ts
var _Transform = class {
  static get start() {
    let resolve3;
    resolve3 = build_my_plop(settings_default(this.Var));
    return resolve3;
  }
  static actions(doc) {
    return actions_default(doc, _Transform);
  }
  static filenames(doc) {
    return filenames_default2(doc, _Transform);
  }
  static prompts(doc) {
    return prompts_default(doc, _Transform);
  }
  static settings(doc) {
    return settings_default2(doc, _Transform);
  }
  static template(doc) {
    return template_default(doc, _Transform);
  }
  static generator(doc) {
    return generator_default(doc, _Transform);
  }
  static transform(doc) {
    return transform_default(doc, _Transform);
  }
};
var Transform = _Transform;
Transform.Var = {
  files: "",
  hasInputs: false,
  inputs: "",
  name: "",
  hasCustomizeFiles: ""
};

// plop/generator/actions.ts
var getPaths = (whatIs, skip, path = "", value = "") => {
  const name_folder = filenames_default.folder(
    "n_a_m_e".replace(/_/g, "")
  );
  return {
    type: "add",
    templateFile: "plop/generator/template/generator/" + whatIs + ".hbs",
    path: `plop/plops/${name_folder}/` + path + filenames_default[whatIs](value ? value : "name"),
    transform: (doc) => Transform[whatIs](doc),
    skip: (answers) => {
      if (typeof skip === "boolean")
        return skip;
      if (typeof skip === "string")
        return answers[skip] ? false : "-SKIP " + whatIs;
      return skip(answers);
    }
  };
};
var getMany = (type) => {
  const handleBars = ", , , , , , , , , , , , , , , , , , ,";
  const y = handleBars;
  const x = y;
  return x.split(",").map((file, i) => {
    return {
      ...getPaths(
        type,
        (answers) => answers["_" + i + "_"] ? false : "--",
        `template/${type}/`,
        `_${i.toString()}_`
      )
    };
  });
};
var resolve = [
  {
    ...getPaths("actions", false)
  },
  {
    ...getPaths("filenames", false)
  },
  {
    ...getPaths("prompts", false)
  },
  {
    ...getPaths("settings", false)
  },
  {
    ...getPaths("template", false)
  },
  ...getMany("generator"),
  ...getMany("transform")
];
var actions_default2 = resolve;

// plop/generator/prompts.ts
var prompts = [
  {
    type: "input",
    name: "name",
    message: "Qual o nome do plop?",
    filter: (input, answers) => {
      Transform.Var.name = input;
      return input;
    }
  },
  {
    type: "input",
    name: "files",
    message: "Quais arquivos voc\xEA criara?",
    filter: (input, answers) => {
      Transform.Var.files = input;
      input.split(",").forEach((_input, i) => {
        const input2 = case_modifiers_default.snakeCase(_input);
        answers[`_${i.toString()}_`] = input2;
      });
      return input;
    }
  },
  {
    type: "input",
    name: "hasCustomizeFiles",
    message: "Voc\xEA deseja customizar quais arquivos sera gerado ao fazer o plop? ( Yes/ Skip )",
    filter: (input, answers) => {
      Transform.Var.hasCustomizeFiles = input;
      answers.hasCustomizeFiles = input;
      return input;
    }
  },
  {
    type: "input",
    name: "inputs",
    message: "Quais ser\xE3o o nome para cada input?",
    filter: (input, answers) => {
      Transform.Var.inputs = input;
      Transform.Var.hasInputs = !!input;
      return input;
    }
  }
];
var prompts_default2 = prompts;

// plop/plops/component_react/settings.ts
var settings_default3 = (var_) => {
  const cases3 = {
    component: "{{ properCase __ }}",
    prop: "{{ camelCase __ }}"
  };
  const c = cases_default("__", cases3);
  const Type = (x) => `T${var_.numbering}${c.component(x)}`;
  const Mock = (x) => `M${var_.numbering}${c.component(x)}`;
  const Component = (x) => `C${var_.numbering}${c.component(x)}`;
  const Style = (x) => `S${var_.numbering}${c.component(x)}`;
  const config = {
    Type: {
      input: [var_.name, "name"],
      default: Type("name")
    },
    Mock: {
      input: [var_.name, "name"],
      default: Mock("name")
    },
    Component: {
      input: [var_.name, "name"],
      default: Component("name")
    },
    Style: {
      input: [var_.name, "name"],
      default: Style("name")
    },
    propsArg: {
      input: [var_.props.split(","), "props"],
      default: c.prop("props"),
      match: [
        {
          key: "#",
          value: c.component("props")
        }
      ],
      spaces: {
        start: "{{}}, ",
        between: "{{}}, ",
        end: "{{}}",
        onlyOne: "{{}}"
      }
    },
    propsType: {
      input: [var_.props.split(","), "props"],
      default: c.prop("props") + ": any",
      match: [
        {
          key: /_/,
          stages: {
            stage_3: (x) => {
              return x.match(/\?/g) ? x : x.replace(":", "?:");
            }
          }
        },
        {
          key: /#/,
          value: `${c.component("props")}: ${Type(
            "props"
          )}`
        }
      ],
      spaces: {
        start: "{{}}\n",
        between: "	{{}}\n",
        end: "	{{}}",
        onlyOne: "{{}}"
      }
    },
    mock: {
      input: [var_.props.split(","), "props"],
      default: `// ${c.prop("props")}: `,
      match: [
        {
          key: "#",
          value: `// ${c.component("props")}: C`
        }
      ],
      spaces: {
        start: "\n	{{}}, \n",
        between: "	{{}}, \n",
        end: "	{{}},",
        onlyOne: "\n	{{}}, \n"
      }
    }
  };
  const css_in_js = ["Styled Components", "Emotion"];
  const custom = {
    css_in_js: css_in_js[1]
  };
  const resolve3 = {
    input: {
      name: var_.name,
      numbering: var_.numbering,
      group: var_.group
    },
    custom,
    config
  };
  return resolve3;
};

// plop/plops/component_react/template/transform/index.ts
var transform_default2 = (x, t) => {
  let { propsArg, propsType, Type } = t.start;
  let doc = x;
  doc = x.replace(
    /__importTypeFile__/,
    t.Var.has_types ? `import * as T from './types'` : ""
  );
  doc = doc.replace(
    /__exportTypeFile__/,
    t.Var.has_types ? `export * as ${Type} from './types'` : ""
  );
  doc = doc.replace(
    /__propsType__/,
    t.Var.has_types ? "" : `export interface ${Type}` + t.state(
      "{\n	children: React.ReactNode\n}",
      "{ " + propsType + " }",
      "{\n	children: React.ReactNode\n	" + propsType + "\n}",
      "{\n	//\n}"
    )
  );
  doc = doc.replace(
    /__props__/,
    t.state(
      "{ children }: " + t.Var.has_types ? "T.Props" : Type,
      "{ " + propsArg + " }: " + (t.Var.has_types ? "T.Props" : Type),
      "{ children, " + propsArg + " }: " + (t.Var.has_types ? "T.Props" : Type),
      ""
    )
  );
  doc = doc.replace(
    /__return__/,
    t.state(
      "(\n		<S.Main>\n			{children}\n		</S.Main>\n	)",
      "(\n		<S.Main></S.Main>\n	)",
      "(\n		<S.Main>\n			{children}\n		</S.Main>\n	)",
      "(\n		<S.Main></S.Main>\n	)"
    )
  );
  return doc;
};

// plop/plops/component_react/template/transform/mock.ts
var mock_default = (x, t) => {
  const { mock } = t.start;
  let doc = x;
  doc = doc.replace(
    /__mock__/,
    t.state(
      "\n	children: ':D',",
      mock,
      "\n	children: ':D'," + mock,
      "\n	//"
    )
  );
  return doc;
};

// plop/plops/component_react/template/transform/stories.ts
var stories_default = (x, t) => {
  const { Component, Mock } = t.start;
  let doc = x;
  doc = doc.replace(
    /__imports__/,
    t.Var.has_mock ? `${Component}, ${Mock}` : `${Component}`
  );
  doc = doc.replace(
    /__title__/,
    t.Var.has_group ? `${case_modifiers_default.properCase(
      t.Var.group
    )}/${Component}` : Component
  );
  doc = doc.replace(/__mock__/g, Mock);
  doc = doc.replace(/__component__/g, Component);
  return doc;
};

// plop/plops/component_react/template/transform/styles.ts
var styles_default = (x, t) => {
  let doc = x;
  return doc;
};

// plop/plops/component_react/template/transform/test.ts
var test_default = (x, t) => {
  const { Component } = t.start;
  let doc = x;
  doc = doc.replace(/__component__/g, Component);
  return doc;
};

// plop/plops/component_react/template/transform/types.ts
var types_default = (x, t) => {
  const { Type, propsType } = t.start;
  let doc = x;
  doc = doc.replace(
    /__propsType__/,
    t.state(
      "{\n	children: React.ReactNode\n}",
      "{ " + propsType + " }",
      "{\n	children: React.ReactNode\n	" + propsType + "\n}",
      "{\n	//\n}"
    )
  );
  return doc;
};

// plop/plops/component_react/template.ts
var _Transform2 = class {
  static get start() {
    let resolve3;
    resolve3 = build_my_plop(settings_default3(this.Var));
    return resolve3;
  }
  static state(onlyChield, onlyArg, both, anything) {
    const isFunc = (x) => typeof x === "function" ? x() : x;
    return this.Var.has_chield || this.Var.props ? this.Var.has_chield && this.Var.props ? isFunc(both) : this.Var.props ? isFunc(onlyArg) : isFunc(onlyChield) : isFunc(anything);
  }
  static index(doc) {
    return transform_default2(doc, _Transform2);
  }
  static mock(doc) {
    return mock_default(doc, _Transform2);
  }
  static stories(doc) {
    return stories_default(doc, _Transform2);
  }
  static styles(doc) {
    return styles_default(doc, _Transform2);
  }
  static test(doc) {
    return test_default(doc, _Transform2);
  }
  static types(doc) {
    return types_default(doc, _Transform2);
  }
};
var Transform2 = _Transform2;
Transform2.Var = {
  name: "",
  numbering: "0",
  group: "",
  html_element: "div",
  props: "",
  has_group: false,
  has_html_element: false,
  has_props: false,
  has_turbo_repo: false,
  has_index: false,
  has_mock: false,
  has_stories: false,
  has_styles: false,
  has_test: false,
  has_types: false,
  has_chield: false
};

// plop/plops/component_react/prompts.ts
var prompts2 = [
  {
    type: "input",
    name: "name",
    message: "Nome:  ",
    filter: (input) => {
      Transform2.Var.name = input;
      return input;
    }
  },
  {
    type: "input",
    name: "numbering",
    message: "Numbering:  ",
    filter: (input, answers) => {
      const numbering = !!input ? input : "0";
      Transform2.Var.numbering = numbering;
      return numbering;
    }
  },
  {
    type: "input",
    name: "group",
    message: "Grupo: ",
    filter: (input) => {
      Transform2.Var.group = input;
      Transform2.Var.has_group = !!input;
      return input;
    }
  },
  {
    type: "input",
    name: "html_element",
    message: "html_element: ",
    filter: (input) => {
      Transform2.Var.html_element = input;
      Transform2.Var.has_html_element = !!input;
      return input;
    }
  },
  {
    type: "input",
    name: "has_chield",
    message: "O componente tem children? ( y/ skip ) ",
    filter: (input) => {
      Transform2.Var.has_chield = !!input;
      return input;
    }
  },
  {
    type: "input",
    name: "has_turbo_repo",
    message: "Preset TurboRepo? ( y/ skip ) ",
    filter: (input) => {
      Transform2.Var.has_turbo_repo = !!input;
      return input;
    }
  },
  {
    type: "props",
    name: "props",
    message: "props: ",
    filter: (input) => {
      Transform2.Var.props = input;
      Transform2.Var.has_props = !!input;
      return input;
    }
  },
  {
    type: "checkbox",
    message: "Quais arquivos devem ser criados?",
    name: "customize_files",
    choices: [
      "index",
      "mock",
      "stories",
      "styles",
      "test",
      "types"
    ],
    filter: (input, answers) => {
      if (input.indexOf("index") > -1) {
        Transform2.Var.has_index = true;
        answers.has_index = "true";
      }
      if (input.indexOf("mock") > -1) {
        Transform2.Var.has_mock = true;
        answers.has_mock = "true";
      }
      if (input.indexOf("stories") > -1) {
        Transform2.Var.has_stories = true;
        answers.has_stories = "true";
      }
      if (input.indexOf("styles") > -1) {
        Transform2.Var.has_styles = true;
        answers.has_styles = "true";
      }
      if (input.indexOf("test") > -1) {
        Transform2.Var.has_test = true;
        answers.has_test = "true";
      }
      if (input.indexOf("types") > -1) {
        Transform2.Var.has_types = true;
        answers.has_types = "true";
      }
      return input;
    }
  }
];
var prompts_default3 = prompts2;

// plop/plops/component_react/filenames.ts
var myFiles2 = {
  folder: "{{ snakeCase __ }}",
  index: "index.tsx",
  mock: "mock.tsx",
  stories: "stories.tsx",
  styles: "styles.tsx",
  test: "test.tsx",
  types: "types.tsx"
};
var cases2 = cases_default("__", myFiles2);
var cases_without_extension2 = Object.keys(cases2).reduce(
  (p, k) => {
    const str = cases2[k]().replace(/}}\.[^\s]*/g, "}}");
    const _str = cases2[k]().replace(/\.[^\s]*/g, "");
    if (cases2[k]().match("}}")) {
      return { ...p, ["_" + k]: str };
    } else {
      return { ...p, ["_" + k]: _str };
    }
  },
  {}
);
var filenames_default3 = {
  ...cases2,
  ...cases_default(cases_without_extension2)
};

// plop/plops/component_react/actions.ts
var getPaths2 = (whatIs, skip) => {
  const name_folder = "{{ properCase name }}_{{ camelCase numbering }}";
  return {
    type: "add",
    templateFile: "plop/plops/component_react/template/generator/" + whatIs + ".hbs",
    path: "{{ group }}" ? `src/components/{{ properCase group }}/${name_folder}/` + filenames_default3[whatIs]("") : `./src/components/${name_folder}/` + filenames_default3[whatIs]("name"),
    transform: (doc) => Transform2[whatIs](doc),
    skip: (answers) => {
      if (typeof skip === "boolean")
        return skip;
      if (typeof skip === "string")
        return answers[skip] ? false : "-SKIP " + whatIs;
      return skip(answers);
    }
  };
};
var resolve2 = [
  {
    ...getPaths2("index", "has_index")
  },
  {
    ...getPaths2("mock", "has_mock")
  },
  {
    ...getPaths2("stories", "has_stories")
  },
  {
    ...getPaths2("styles", "has_styles")
  },
  {
    ...getPaths2("test", "has_test")
  },
  {
    ...getPaths2("types", "has_types")
  }
];
var actions_default3 = resolve2;

// plop/plopfile.ts
function plopfile_default(plop) {
  plop.setWelcomeMessage("Oque deseja criar?");
  plop.setGenerator("component react", {
    description: "cria\xE7\xE3o de componentes react com js/ts",
    prompts: [...prompts_default3],
    actions: [...actions_default3]
  });
  plop.setGenerator("plop", {
    description: "cria\xE7\xE3o de geradores de plop",
    prompts: [...prompts_default2],
    actions: [...actions_default2]
  });
}
export {
  plopfile_default as default
};
