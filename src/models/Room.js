module.exports = (sequelize, DataTypes) => {
    const Room = sequelize.define('room', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            field: 'name',
            type: DataTypes.STRING,
            required: true
        },
        createdAt: {
            field: 'created_at',
            type: DataTypes.DATE,
        },
        updatedAt: {
            field: 'updated_at',
            type: DataTypes.DATE,
        },
        roomMoney: {
            field: 'room_money',
            type: DataTypes.STRING
        },
        roomMaster: {
            field: 'room_master',
            type: DataTypes.NUMBER
        }
    }, {
        freezeTableName: true
    });

    return Room;
}