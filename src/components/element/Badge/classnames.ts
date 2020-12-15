const type = (src: any) => {
    if (src instanceof Array) {
        return 'array';
    }
    if (src instanceof Object) {
        return 'object';
    }
    return '';
}

const set = (obj: any): object => {
    const res = {};
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            obj[key] && (res[key] = obj[key]);
        }
    }
    return res
}

function classnames(...args: any): any {
    return args.reduce((res: any, current: any) => {
        if (type(current) === 'object') {
            Object.assign(res, set(current))
        }
        if (type(current) === 'array') {
            current.reduce((ares: any, value: any) => {
                if (type(value) === 'object') {
                    Object.assign(res, set(value))
                }
            }, res)
        }
        return res;
    }, {});
}
export default classnames
