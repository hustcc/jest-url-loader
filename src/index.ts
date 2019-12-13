import * as fs from 'fs';
import mime from 'mime';

/**
 * the transformer entry
 * @type {{process(*=): *}}
 */
module.exports = {
  /**
   * @param src file content string
   * @param filename file path
   * @param config jest config
   * @param options transformer options
   */
  process(src, filename, config, options): string {
    const mimeType = options.mimetype || mime.getType(filename);

    // read binary data
    const bitmap = fs.readFileSync(filename);
    // convert binary data
    const buf = new Buffer(bitmap);

    return `module.exports = ${JSON.stringify(`data:${mimeType || ''};base64,${buf.toString('base64')}`)}`;
  },
};
