import { type Logger } from "@fltsci/covector-types";
import { configFile } from "@fltsci/covector-files";

import type { Covector } from "@fltsci/covector-types";

export function* config({
  logger,
  cwd = process.cwd(),
  modifyConfig = async (c) => c,
}: {
  logger: Logger;
  cwd?: string;
  modifyConfig?: (c: any) => Promise<any>;
}): Generator<any, Covector, any> {
  let config = yield modifyConfig(yield configFile({ cwd }));
  delete config.file;
  logger.info({ renderAsYAML: config });
  return { response: "config returned" };
}
