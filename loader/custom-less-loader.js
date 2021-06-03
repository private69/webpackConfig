/**
 * 
 */

function loader(source) {
    // 告诉当前上下文这是一个异步的loader，需要loader runner等待less.render异步处理的结果
    // const callback = this.async();
    // 接受less源码，并返回一个promise，在返回的promise中等待less.rendera处理完less之后，使用callback将处理的结果返回给下一个loader
    // callback(null, output.txt);
    return `export default ${JSON.stringify(source)}`
}
module.exports = loader;