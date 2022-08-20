export const convertPostgresDateWithoutTime = (date: string) => {
    console.log(date.substring(0, 19));
    return new Date(`${date.substring(0, 19)}`)
}