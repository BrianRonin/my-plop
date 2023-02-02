type MatchConf = {
  /**
   * Escolha uma chave que sera o match para efetuar a alteração do valor
   */
  key?: string | RegExp
  /**
   * Valor retornado caso aconteca 'match' com a chave
   */
  value?: string
  /**
   * Manupipule a saida da variavel enquanto esta sendo gerada
   */
  stages?: {
    stage_0?: (v: string) => string
    stage_1?: (v: string) => string
    stage_2?: (v: string) => string
    stage_3?: (v: string) => string
  }
}

export type PlopVariable = {
  /**
   * Defina um valor e um input, O valor não precisa
   * ser necessariamente o mesmo do input que sera
   * usado apenas para match, caso o valor seja um
   * Array sera necessario definir "spaces" para
   * construir a variavel
   */
  input: [string | string[], string]
  /**
   * Defina um valor padrão que sera usado,
   * aqui você tem acesso ao valor do input
   * assim {{ case value }}, e também tem acesso
   * ao resultado de outras variaveis assim {{ ...variavel }}
   */
  default?: string
  /**
   * Manipule o valor caso bata com um 'match'
   */
  match?: MatchConf[]
  /**
   * Isso sera necessario se o valor do input for um array,
   * aqui você defini como sera tratado o inicio, meio etc...,
   * para montar a variavel, você deve indicar aonde sera colocado
   * o resultado assim ex: '{{}} \n'
   */
  spaces?: {
    /**
     * Defina como sera o resultado do primeiro valor
     */
    start: string
    /**
     * Defina como sera o resultado entre os valores do meio
     */
    between: string
    /**
     * Defina como sera o resultado do ultimo valor
     */
    end: string
    /**
     * Defina como sera o resultado caso tenha apenas um valor no array
     */
    onlyOne: string
  }
}

export interface PlopConf {
  /**
   * Coloque aqui dentro oque quiser para passar para a Class construtora
   */
  custom?: Record<string, any>
  /**
   * Coloque aqui os inputs que serão usados apenas para fazer leituras de match em "config" indexado pela chave
   */
  input: Record<string, string>
  /**
   * Aqui inicia a configuração das variaveis reais que serão usados na classe construtora
   */
  config: Record<string, PlopVariable>
}
