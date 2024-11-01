export const product = {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'image',
            type: 'image',
            title: 'Product Image',
            options:{
                hotspot:true
            }
        },
        
    ]
}