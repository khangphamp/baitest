const generalPhrase = (data, quality) => {
    const dataIndex = [];
    const dataName = [];
    const dataLength = data.length;
    for (let i = 1; i <= quality; i++) {
        for (let j = 0; j >= 0; j++) {
            const num = Math.floor(Math.random() * (dataLength - 0));
            if (!dataIndex.includes(num)) {
                dataIndex.push(num);
                dataName.push({
                    name: data[num],
                    index: i,
                });
                break;
            }
        }
    }
    return dataName;
};
const generalPhrase3 = (data, quality) => {
    const dataIndex = [];
    const dataName = [];
    const dataLength = data.length;
    for (let i = 1; i <= quality; i++) {
        for (let j = 0; j >= 0; j++) {
            const num = Math.floor(Math.random() * (dataLength - 0));
            if (!dataIndex.includes(num)) {
                dataIndex.push(num);
                dataName.push(data[num]);
                break;
            }
        }
    }
    return dataName;
};

const generalPhrase2 = (data, size) => {
    const newArr = [];
    const sortDataRandom = data.sort(() => {
        return 0.5 - Math.random();
    });
    const length = sortDataRandom.length;
    for (let i = 0; i < length; i += size) {
        const numRandom = Math.floor(Math.random() * (3 - 0));
        const primaryIndex = sortDataRandom[numRandom]?.index;
        newArr.push({
            values: sortDataRandom.splice(0, 3),
            primaryIndex,
        });
    }
    return newArr;
};
export { generalPhrase, generalPhrase3, generalPhrase2 };
