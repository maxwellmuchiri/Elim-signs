

const products = [
    // 3D Signs
    {
      id: 1,
      name: '3D Sign 1',
      description: 'Description of 3D Sign 1',
      price: 99.99,
      image: 'https://scontent.fnbo1-1.fna.fbcdn.net/v/t39.30808-6/376646800_624687526452359_9100086174277594774_n.jpg?stp=c0.83.206.206a_dst-jpg_p206x206&_nc_cat=110&ccb=1-7&_nc_sid=0df3a7&_nc_ohc=ArQsqwL0vvIAX_UMzl4&_nc_ht=scontent.fnbo1-1.fna&oh=00_AfBaPivjSFmlLc6PNKqzPuVck8dv7YDO7DDE-Ja1U1actw&oe=6502E39D',
      category: '3D Signs',
    },
    {
      id: 2,
      name: '3D Sign 2',
      description: 'Description of 3D Sign 2',
      price: 129.99,
      image: 'https://scontent.fnbo1-1.fna.fbcdn.net/v/t39.30808-6/376581125_624687956452316_159646435912976525_n.jpg?stp=c34.0.206.206a_dst-jpg_p206x206&_nc_cat=103&ccb=1-7&_nc_sid=0df3a7&_nc_ohc=MSFItV_leiEAX_zACHB&_nc_ht=scontent.fnbo1-1.fna&oh=00_AfBlExYYSvGk_ixbOLUsJj--Zfxi5t_wV6UmIXJv1Es6AA&oe=65027629',
      category: '3D Signs',
    },
    {
      id: 3,
      name: '3D Sign 3',
      description: 'Description of 3D Sign 3',
      price: 79.99,
      image: 'https://scontent.fnbo1-1.fna.fbcdn.net/v/t39.30808-6/376630552_625025439751901_693178975383671451_n.jpg?stp=c126.0.206.206a_dst-jpg_p206x206&_nc_cat=111&ccb=1-7&_nc_sid=0df3a7&_nc_ohc=myKV83EdJpIAX9hHV4-&_nc_ht=scontent.fnbo1-1.fna&oh=00_AfCtZH4h1yo9rJy7mS6gJfLGXipl4yJwEN1Dkt0jhFliiw&oe=6502AF1D',
      category: '3D Signs',
    },
    {
      id: 4,
      name: '3D Sign 4',
      description: 'Description of 3D Sign 4',
      price: 149.99,
      image: 'https://scontent.fnbo1-1.fna.fbcdn.net/v/t39.30808-6/376618184_625027443085034_2666403404095473713_n.jpg?stp=c34.0.206.206a_dst-jpg_p206x206&_nc_cat=107&ccb=1-7&_nc_sid=0df3a7&_nc_ohc=YOmuuXBNJGIAX9neJHU&_nc_ht=scontent.fnbo1-1.fna&oh=00_AfB6mMbiZamGdT-qx-dxuy49EtpeZP-9kz7j-GVur23q7A&oe=6501BEFA',
      category: '3D Signs',
    },
    // 2D Signs
    {
      id: 5,
      name: '2D Sign 1',
      description: 'Description of 2D Sign 1',
      price: 49.99,
      image: 'URL_TO_2D_IMAGE_1',
      category: '2D Signs',
    },
    {
      id: 6,
      name: '2D Sign 2',
      description: 'Description of 2D Sign 2',
      price: 59.99,
      image: 'URL_TO_2D_IMAGE_2',
      category: '2D Signs',
    },
    {
      id: 7,
      name: '2D Sign 3',
      description: 'Description of 2D Sign 3',
      price: 39.99,
      image: 'URL_TO_2D_IMAGE_3',
      category: '2D Signs',
    },
    {
      id: 8,
      name: '2D Sign 4',
      description: 'Description of 2D Sign 4',
      price: 69.99,
      image: 'URL_TO_2D_IMAGE_4',
      category: '2D Signs',
    },
    // Road Signs
    {
      id: 9,
      name: 'Road Sign 1',
      description: 'Description of Road Sign 1',
      price: 29.99,
      image: 'https://scontent.fnbo1-1.fna.fbcdn.net/v/t39.30808-6/376562336_624687466452365_6498037655795113202_n.jpg?stp=c0.83.206.206a_dst-jpg_p206x206&_nc_cat=101&ccb=1-7&_nc_sid=0df3a7&_nc_ohc=E9z_1D6P03MAX-CTwB0&_nc_ht=scontent.fnbo1-1.fna&oh=00_AfDa5-391phhStzuFOQDI1NE-ObVPa_rq6kz7KTNQnh7UQ&oe=65026461',
      category: 'Road Signs',
    },
    {
      id: 10,
      name: 'Road Sign 2',
      description: 'Description of Road Sign 2',
      price: 39.99,
      image: 'https://scontent.fnbo1-1.fna.fbcdn.net/v/t39.30808-6/376558691_624687556452356_5664594226215012650_n.jpg?stp=c0.23.206.206a_dst-jpg_p206x206&_nc_cat=100&ccb=1-7&_nc_sid=0df3a7&_nc_ohc=IdSCMWWfmQgAX9yhOHm&_nc_ht=scontent.fnbo1-1.fna&oh=00_AfA4I1k074myd6KCgHU87Lwtr2HC6-kb8lTA1mpy4m-0mA&oe=650298BC',
      category: 'Road Signs',
    },
    {
      id: 11,
      name: 'Road Sign 3',
      description: 'Description of Road Sign 3',
      price: 24.99,
      image: 'URL_TO_ROAD_IMAGE_3',
      category: 'Road Signs',
    },
    {
      id: 12,
      name: 'Road Sign 4',
      description: 'Description of Road Sign 4',
      price: 34.99,
      image: 'URL_TO_ROAD_IMAGE_4',
      category: 'Road Signs',
    },
    // CNC Cuts
    {
      id: 13,
      name: 'CNC Cut 1',
      description: 'Description of CNC Cut 1',
      price: 89.99,
      image: 'URL_TO_CNC_IMAGE_1',
      category: 'CNC Cuts',
    },
    {
      id: 14,
      name: 'CNC Cut 2',
      description: 'Description of CNC Cut 2',
      price: 99.99,
      image: 'URL_TO_CNC_IMAGE_2',
      category: 'CNC Cuts',
    },
    {
      id: 15,
      name: 'CNC Cut 3',
      description: 'Description of CNC Cut 3',
      price: 79.99,
      image: 'URL_TO_CNC_IMAGE_3',
      category: 'CNC Cuts',
    },
    {
      id: 16,
      name: 'CNC Cut 4',
      description: 'Description of CNC Cut 4',
      price: 109.99,
      image: 'URL_TO_CNC_IMAGE_4',
      category: 'CNC Cuts',
    },
    // Add more categories and products as needed
  ];
  
  export default products;
  