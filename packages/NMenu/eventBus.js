// 公众号对象
export const eventEmitter = {};

// 缓存列表，存放 event 及 fn
eventEmitter.list = {};

// 订阅
eventEmitter.on = function (event, fn) {
  let _this = this;
  // 如果对象中没有对应的 event 值，也就是说明没有订阅过，就给 event 创建个缓存列表
  // 如有对象中有相应的 event 值，把 fn 添加到对应 event 的缓存列表里
  (_this.list[event] || (_this.list[event] = [])).push(fn);
  return _this;
};

// 发布
eventEmitter.emit = function () {
  let _this = this;
  // 第一个参数是对应的 event 值，直接用数组的 shift 方法取出
  let event = [].shift.call(arguments),
    fns = [..._this.list[event]];
  // 如果缓存列表里没有 fn 就返回 false
  if (!fns || fns.length === 0) {
    return false;
  }
  // 遍历 event 值对应的缓存列表，依次执行 fn
  fns.forEach((fn) => {
    fn.apply(_this, arguments);
  });
  return _this;
};


export const user = (content) => {
  return content;
};


export const current = {
  router: false
};


Object.defineProperty(current, 'index', {
  set(val) {
    this._index = val;
    eventEmitter.emit('article', this._index);
  },
  get() {
    return this._index;
  },
});
