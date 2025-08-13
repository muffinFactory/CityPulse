import Axios from "axios"

export type { AxiosResponse as ApiResponse } from "axios"
export type { AxiosError as ApiError } from "axios"
const Api = Axios

// Later-Do: Axios typing broke at the moment so just export import axios for easier axios access
export default Api
