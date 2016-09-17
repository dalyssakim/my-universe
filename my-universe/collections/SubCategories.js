SubCategories = new Mongo.Collection('subCategories');

SubCategories.allow({ /* Who can insert? */
    insert: function(userId, doc) {
        return !!userId; /* if user id exists - signed in */
    },
    update: function(userId, doc) {
        return !!userId;
    }
});

SubCategorySchema = new SimpleSchema({
    categoryId : {
        type: String
    },
    name: {
        type: String
    },
    description: {
        type: String
    },
    numOfSubscribers: {
        type: Number, defaultValue: 0
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


SubCategories.attachSchema(SubCategorySchema);