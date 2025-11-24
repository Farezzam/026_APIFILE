async function createKomik(database, komikData, ) {
    const {title, description, author, imageType, imageName, ImageData} = komikData;

    if (!title || !description || !author) {
        throw new Error('Title, description, dan author wajib diisi');
    }

    const newKomik = await database.Komik.create({
        title,
        description,
        author,
        imageType: imageType || null,
        imageName: imageName || null,
        ImageData: ImageData || null
    });

    return newKomik;
}

async function getAllKomiks(database) {
    const komik = await database.Komik.findAll();
    return komik.map(k =>{
        if (k.imageData) {
            k.imageData = k.imageData.toString('base64');
        }
        return k;
    });
}

async function getKomikById(database, id) {
    const komik = await database.Komik.findByPk(id);
    if (komik.ImageData) {
        komik.imageData = komik.ImageData.toString('base64');
    }
    return komik;
}

async function updateKomik(database, id, komikData) {
    const komik = await database.Komik.findByPk(id);
    if (!komik) {
        throw new Error(`Komik dengan ID ${id} tidak ditemukan`);
    }
    await komik.update(komikData);
    return komik;
}

async function deleteKomik(database, id) {
    const komik = await database.Komik.findByPk(id);
    if (!komik) {
        throw new Error(`Komik dengan ID ${id} tidak ditemukan`);
    }
    await komik.destroy();
    return {message: `Komik dengan ID ${id} telah dihapus`};
}

module.exports = {
    createKomik,
    getAllKomiks,
    getKomikById,
    updateKomik,
    deleteKomik
};