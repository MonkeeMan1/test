interface HelloType {
  hiThere: string;
}

function helloFunction(data: HelloType) {
  console.log(`Hello from cache package ${data.hiThere}`);
}

export const cacheTest = {
  helloFunction,
};
export type { HelloType };

