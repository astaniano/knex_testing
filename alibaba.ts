
function alibaba() {
    // return {ddd: 'what is up?'};

    return Promise.resolve(() => ({
        select: jest.fn().mockReturnThis(),
        from: jest.fn().mockReturnThis(),
        where: function (req) {
            this.dbResponse3 = [{
                id: 1,
                user_id: 1,
                geofence_id: "3",
                notification_settings: 1,
                created_at: "string",
                updated_at: "string",
            }]
            return this;
        },
        first: jest.fn().mockReturnThis(),
        then: jest.fn(function (done) {
            done(this.dbResponse3);
        }),
    }))
}

export default alibaba;
