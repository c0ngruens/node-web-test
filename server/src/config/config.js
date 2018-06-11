module.exports = {
  app: {
    name: 'MyCoolApp',
    port: process.env.PORT || 8081
  },
  token: {
    secret: process.env.JWT_SECRET || 'A0a0d789a7a9d7sa',
    /**
     * Time in seconds
     */
    expires: 60 * 60
  }
}
