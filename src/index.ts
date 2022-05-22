import { Context, Random, Schema, segment } from 'koishi'

const BASE_URL = 'https://mm.cqu.cc/share/zhifubaodaozhang/mp3/{0}.mp3'

export interface Config {}

export const name = 'alipay-voice'
export const Config: Schema<Config> = Schema.object({})

export function apply(ctx: Context) {
  ctx.command('alipay-voice [id:posint]')
    .action(async (_, id = Random.int(1, 100)) => {
      return segment.audio(BASE_URL.replace('{0}', '' + id))
    })
}
