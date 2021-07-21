import GetCoord from '../GetCoord/GetCoord'

//test if it returns a value
test('test', () => {
    GetCoord({ address: "SJSU" }).then(
        res => {
            expect(res).toBe(true)
        }
    )
})

//test if it returns a correct value
test('test', () => {
    GetCoord({ address: "SJSU" }).then(
        res => {
            expect(res).toBe({ lat: 37, lng: -122 })
        }
    )
})