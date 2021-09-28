import * as Yup from 'yup';
type ValidationResponse = {
    valid: boolean,
    transform?: string
}

const GET_JSON = {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
}

Yup.addMethod(Yup.string, 'unicusername', function (message) {
    return this
        .test({
            name: 'unicusername',
            exclusive: true,
            message: message || 'Username is already taken',  // expect an i18n message to be passed in
            test: async function (value) {
                const response = await fetch(`http://127.0.0.1:8000/validator/username?value=${value}`, GET_JSON)
                const json:ValidationResponse = await response.json()
                return json.valid
            }
        })
})