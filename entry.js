import * as NOCOM_AType from "@nocom_bot/nocom-atype-support";
import os from "node:os";

// For DRM purposes. You can check if your plugin is genuine or not, then report back to the handler.
// The handler will immediately crash the plugin if it receives non-genuine state coming from the plugin.
//
// Note: If no verification status is sent in 30s, the handler will also crash the plugin for not responding.
NOCOM_AType.verifyPlugin(true);

await NOCOM_AType.registerCommand("uname", {
  args: {},
  argsName: [],
  description: {
    fallback: "Print uname of the current server running this bot",
    "en-US": "Print uname of the current server running this bot",
    vi: "In ra uname của server đang chạy bot này"
  }
}, async data => {
  return {
    content: `${os.type()} ${os.hostname()} ${os.release()} ${os.version()} ${os.arch()}`
  }
});
