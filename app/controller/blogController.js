export const createBlog = (req, res) => {
    try {
        res.send('Blog created successfully.');
    }catch(err) {
        console.log('error occured creating blog controller');}
}

export const readBlog = (req, res) => {
    try {
        res.send('Blog read successfully.');
    }catch (e) {
        console.log('error occurred reading blog controller');
    }
}

export const updateBlog = (req, res) => {
    try {
        res.send('Blog updated successfully.');
    }catch (e) {
        console.log('error occured updating blog controller');
    }
}

export const deleteBlog = (req, res) => {
    try {
        res.send('Blog deleted successfully.');
    }catch (e) {
        log.error('error occurred deleting blog controller');
    }
}