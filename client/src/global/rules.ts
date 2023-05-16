import { RequestGroup } from "@/services/GroupService"

export const required = (value: any) => value ? true : "Esse campo é obrigatorio!"
// export const invalidGroupCode = async (value: string) => await RequestGroup(value) ? true : 'Codigo invalido!'