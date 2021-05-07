import {
  cleanEnv,
  str,
  bool
} from 'envalid';

export default function () {
  const {
    nuxt
  } = this;
  
  if (nuxt.options.dev) {
   cleanEnv(process.env, {
     USERNAME: str(),
     PASSWORD: str(),
     BOT_USER_AGENT: str(),
     BASIC_ENABLED: bool()
   })
  }

  nuxt.hook('listen', async function (server, { port }) {
   nuxt.options.cli.badgeMessages.push(`Environment variables seem healthy!`)
  });
}
