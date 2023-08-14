import { Measures } from "@/types/Measure";

export default function calculateScores(
  answers: number[],
  measures: Measures,
): Measures {
  const newMeasures = { ...measures };
  for (const key in newMeasures) {
    const measure = newMeasures[key];
    const formula = measure.formula;
    if (formula) {
      const sumRegex = /SUM\(([^)]+)\)/g;
      let sumMatch;
      let newFormula = formula;
      while ((sumMatch = sumRegex.exec(formula))) {
        const sumArgs = sumMatch[1].split(",");
        let sum = 0;
        for (const arg of sumArgs) {
          if (isNaN(Number(arg))) {
            sum += newMeasures[arg].score;
          } else {
            sum += answers[Number(arg) - 1];
          }
        }
        newFormula = newFormula.replace(sumMatch[0], String(sum));
      }
      const score = eval(newFormula);
      measure.score = score;
    }
  }
  return newMeasures;
}
