const arr = new ArrayBuffer(5)
const view = new DataView(arr)

view.setInt8(0, 0x6b)
view.setInt8(1, 0x65)
view.setInt8(2, 0x76)
view.setInt8(3, 0x69)
view.setInt8(4, 0x6E)

const emptyArr = []

for (let i = 0; i < arr.byteLength; i++) {
    console.log(view.getInt8(i));
    emptyArr.push(view.getInt8(i))
}

const ascii = emptyArr.map((arr) => {
    // return arr.toString(2)
    return String.fromCharCode(arr)
})
console.log(ascii);

const alphabet = 'k'
console.log(alphabet.charCodeAt(0));

const k_CharDecimal = 107
console.log(k_CharDecimal.toString(16));
