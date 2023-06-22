/// <reference lib="dom" />
import { Agent, fetch, setGlobalDispatcher } from 'undici'

setGlobalDispatcher(new Agent({ connect: { timeout: 60_000 } }))

export { fetch }
