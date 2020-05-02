export function logger(req: any, res: any, next: any): void {
  // ...
}

export function serverListener(port: number): void {
  console.log(`Express API Runs On Port ${port}`)
}
