//posts views
dbConnection.save('_design/posts', {
    all: {
        map: function (doc) {
            if (doc.type == 'post') emit(null, doc);
        }
    }
});
