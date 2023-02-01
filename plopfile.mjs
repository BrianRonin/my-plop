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
    return { ...p, ["_" + k]: str };
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
  const resolve2 = format_hooks(
    _formater(obj.config, single_inputs)
  );
  obj.custom && (resolve2.custom = obj.custom);
  return resolve2;
}
function _formater(obj, single_inputs) {
  const resolve2 = {};
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
      resolve2[k] = outputs.length > 0 ? outputs.reduce((prev, output, index) => {
        const resolve3 = handle_spaces_default(
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
        return [...prev, resolve3];
      }, []).join("") : "";
    } else {
      resolve2[k] = formater(
        {
          ...obj[k],
          input: obj[k].input[0]
        },
        single_inputs
      );
    }
  });
  obj.custom && (resolve2.custom = obj.custom);
  return resolve2;
}
function formater(obj, inputs) {
  let resolve2;
  let stages = {
    stage_0: (x) => x,
    stage_1: (x) => x,
    stage_2: (x) => x,
    stage_3: (x) => x
  };
  let keys_of_match = [];
  resolve2 = obj.default ?? "";
  obj.match && obj.match.map((match) => {
    keys_of_match.push(match.key);
    if (obj.input.match(match.key)) {
      match.value && typeof match.value === "string" && (resolve2 = match.value);
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
      if (resolve2.match(regex)) {
        const output = stages.stage_2(
          func(
            stages.stage_1(stages.stage_0(inputs[input]))
          )
        );
        resolve2 = stages.stage_3(
          resolve2.replace(regex, output)
        );
      }
    }
  });
  return resolve2;
}

// plop/generator/settings.ts
var settings_default = (var_) => {
  const cases2 = {
    name: "{{ snakeCase __ }}",
    files: "{{ snakeCase __ }}",
    inputs: "{{ snakeCase __ }}",
    cases: "{{ snakeCase __ }}",
    transform_files: "transform_{{ snakeCase __ }}"
  };
  const c = cases_default("__", cases2);
  const config = {
    getPaths: {
      input: [var_.files.split(","), "files"],
      default: `
	{
		...getPaths('${c.files(
        "files"
      )}', () => false),
	},`,
      spaces: {
        start: "{{}}",
        between: "{{}}",
        end: "{{}}",
        onlyOne: "{{}}"
      }
    },
    fileNames: {
      input: [var_.files.split(","), "files"],
      default: `
	${c.files(
        "files"
      )}: '{{ snakeCase __ }}',`,
      spaces: {
        start: `
	folder: '{{ snakeCase }}',{{}}`,
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
		has${c.inputs("inputs")}: false,`,
      spaces: {
        start: "{{}}",
        between: "{{}}",
        end: "{{}}",
        onlyOne: "{{}}"
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
      Transform.Var.has${c.inputs("inputs")} = !!input
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
      default: `	${c.inputs("inputs")}`,
      spaces: {
        start: "\n{{}}",
        between: "\n{{}}",
        end: "\n{{}}",
        onlyOne: "\n{{}}"
      }
    }
  };
  const resolve2 = {
    custom: {},
    input: {
      name: var_.name,
      files: var_.files,
      inputs: var_.inputs
    },
    config
  };
  return resolve2;
};

// plop/generator/template/transform/actions.ts
var actions_default = (x, t) => {
  console.log(t.start);
  const { getPaths: getPaths2 } = t.start;
  let doc = x;
  doc = doc.replace(/__getPaths__/, getPaths2);
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
  const { inputsPrompt, typesInput } = t.start;
  let doc = x;
  doc = doc.replace(
    /__inputs__/,
    t.Var.hasInputs ? inputsPrompt : ""
  );
  doc = doc.replace(
    /__typesInput__/,
    t.Var.hasInputs ? typesInput : ""
  );
  return doc;
};

// plop/generator/template/transform/settings.ts
var settings_default2 = (x, t) => {
  const { cases: cases2, inputsSettings, commentsSettings } = t.start;
  let doc = x;
  doc = doc.replace(
    /__cases__/,
    t.Var.hasInputs ? cases2 : `
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
    hasInputs
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
    let resolve2;
    resolve2 = build_my_plop(settings_default(this.Var));
    return resolve2;
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
  name: ""
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
    skip
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
    ...getPaths("actions", () => false)
  },
  {
    ...getPaths("filenames", () => false)
  },
  {
    ...getPaths("prompts", () => false)
  },
  {
    ...getPaths("settings", () => false)
  },
  {
    ...getPaths("template", () => false)
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
    message: "qual o nome do plop?",
    filter: (input, answers) => {
      Transform.Var.name = input;
      return input;
    }
  },
  {
    type: "input",
    name: "files",
    message: "quais arquivos voc\xEA criara",
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
    name: "inputs",
    message: "quais inputs para cria\xE7\xE3o",
    filter: (input, answers) => {
      Transform.Var.inputs = input;
      Transform.Var.hasInputs = !!input;
      return input;
    }
  }
];
var prompts_default2 = prompts;

// plopfile.ts
function plopfile_default(plop) {
  plop.setWelcomeMessage("Oque deseja criar?");
  plop.setGenerator("plop", {
    description: "cria\xE7\xE3o de geradores de plop",
    prompts: [...prompts_default2],
    actions: [...actions_default2]
  });
}
export {
  plopfile_default as default
};
