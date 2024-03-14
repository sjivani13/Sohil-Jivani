module.exports = {

    app: {
        name: "Trio Digital Dishes",
        apiEndpoint: process.env.API_URL ? `/${process.env.API_URL}` : "/api",
    },
    database: {

        url:
            process.env.MONGODB_URI || "mongodb+srv://samboones:Khaylee16@cluster0.ue7eko4.mongodb.net/capstone?retryWrites=true&w=majority",

        name: process.env.MONGODB_NAME || "capstone",
    },
    jwt: {
        secret: process.env.JWT_SECRET || "jwt-secret",
        tokenLife: "7d",
    },
    port: {
        web: 3001
    }
};
// export const PORT = process.env.PORT || 3001;
