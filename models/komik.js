module.exports = (sequelize, DataTypes) => {
    const Komik = sequelize.define('Komik', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING,
        },
        author: {
            type: DataTypes.STRING,
        },
        imageType: DataTypes.STRING,
        imageName: DataTypes.STRING,
        ImageData: DataTypes.BLOB('long'),
    }, {
        tableName: 'komiks',
    });
    return Komik;
};