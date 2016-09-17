UserPreferences = new Mongo.Collection('userPreferences');

UserPreferences.allow({ /* Who can insert? */
    insert: function(userId, doc) {
        return !!userId; /* if user id exists - signed in */
    },
    update: function(userId, doc) {
        return !!userId;
    }
});

UserPreferencesSchema = new SimpleSchema({
    /* Defining some properties */
    userId: {
        type: String
    },
    subscribingSubCategories: {
        type: [ String ],
        optional: true
    },
    myArticles: {
        type: [ String ],
        optional: true
    },
    myComments: {
        type: [ String ],
        optional: true
    }
});

UserPreferences.attachSchema( UserPreferencesSchema );