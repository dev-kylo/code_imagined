const { GoogleSpreadsheet } = require('google-spreadsheet')
require('dotenv').config()

exports.handler = async event => {
    // Only allow POST
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: 'Method Not Allowed',
        }
    }

    try {
        // Initialize the sheet
        const doc = new GoogleSpreadsheet(process.env.GOOGLE_SPREADSHEET_ID)

        // Initialize auth
        await doc.useServiceAccountAuth({
            client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
            private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        })

        await doc.loadInfo() // loads document properties and worksheets
        const sheet = doc.sheetsByIndex[0] // get the first sheet

        // Add the current date
        await sheet.addRow({
            date: new Date().toISOString(),
        })

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Date added successfully' }),
        }
    } catch (error) {
        console.error('Error:', error)
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to add date to spreadsheet' }),
        }
    }
}
