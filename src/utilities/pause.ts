export async function pause(timeInMiliseconds: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, timeInMiliseconds);
  });
}
