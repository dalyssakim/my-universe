Categories = new Mongo.Collection('categories');
Categories.allow({ /* Who can insert? */
    insert: function(userId, doc) {
        return !!userId; /* if user id exists - signed in */
    },
    update: function(userId, doc) {
        return !!userId;
    }
});

CategorySchema = new SimpleSchema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    createdAt: {
        type: Date,
        label: "Created At",
        autoValue: function() {
            return new Date()
        },
        autoform: {
            type: "hidden"
        }
    }
});

Categories.attachSchema( CategorySchema );