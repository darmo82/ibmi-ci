
export class StepI {
  public id = `base`;
  public description = `Base Step Description`;
  public requiredParams: string[] = [];

  parameters: string[] = [];

  constructor() {}

  addParameter(value: string) {
    this.parameters.push(value);
  }

  async execute(): Promise<boolean> {return false};

  validateParameters(): boolean {
    return this.parameters.length >= this.requiredParams.length;
  }
}