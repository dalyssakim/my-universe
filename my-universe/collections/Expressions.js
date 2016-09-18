Expressions = new Mongo.Collection('expressions');

Expressions.allow({ /* Who can insert? */
    insert: function(userId, doc) {
        return !!userId; /* if user id exists - signed in */
    },
    update: function(userId, doc) {
        return !!userId;
    }
});

Comment = new SimpleSchema({
    userId: {
        type: String
    },
    content: {
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

ExpressionSchema = new SimpleSchema({
    /* Defining some properties */
    userId: {
        type: String
    },
    userName: {
        type: String
    },
    categoryId: {
        type: String
    },
    category: {
        type: String
    },
    subCategoryId: {
        type: String
    },
    subCategory: {
        type: String
    },
    viewCount: {
        type: Number, defaultValue: 0
    },
    thumbsUp: {
        type: [String],
        optional: true
    },
    thumbsDown: {
        type: [String],
        optional: true
    },
    title: {
        type: String},
    content: {
        type: String},
    author: {
        type: String,
        label: "Author",
        autoValue: function() {
            return this.userId;
        },
        autoform: {
            type: "hidden"
        }
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

Expressions.attachSchema( ExpressionSchema );