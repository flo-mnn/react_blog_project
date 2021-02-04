import React from 'react';

const ArticleContent = props => {

    return(
        <section className='article-content container text-justify d-flex flex-column align-items-center'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, exercitationem dolores. Iste animi qui quae ex accusantium nemo maiores possimus? Nisi molestiae eaque, doloribus beatae facilis, dolor quas, nam repellendus placeat sunt veritatis. Commodi dolorum eaque, esse id sequi mollitia odio voluptates impedit nam quos itaque illum officiis ut, non praesentium iste ducimus minima neque consequuntur animi nihil. Excepturi omnis eligendi, quas doloremque nihil rem quaerat quibusdam possimus rerum itaque quidem sequi porro exercitationem alias accusamus odio dolorum, adipisci neque dolores quasi reiciendis quisquam odit, ullam fuga. Natus aliquid voluptate totam necessitatibus consectetur sed minima laboriosam sint temporibus eos? Officia.</p>
            <div className='citation w-75 my-5 p-5 border border-danger rounded d-flex flex-column align-items-center font-weight-bold'>
                <span className="align-self-start">"</span>
                <p className="font-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, provident modi deserunt ea, maiores vitae aperiam velit atque deleniti, quos doloribus autem adipisci ab blanditiis?</p>
                <span className="align-self-end">"</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis cumque perspiciatis, blanditiis nesciunt vel delectus optio quos ducimus sint minus animi sunt veniam. Voluptate saepe et in nostrum consequuntur eligendi officiis atque quasi, dicta nobis, laboriosam fuga repudiandae, suscipit facilis voluptatibus at itaque voluptatum expedita repellendus? A, pariatur? Atque, eius.</p>
            <div className="row my-5">
                <div className="col-12 col-md-6">
                    <img src={props.article.coverImg} alt="img" className="img-fluid"/>
                </div>
                <div className="col-12 col-md-6 my-auto">
                    <p className="ml-5">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem ut nesciunt obcaecati velit nihil, illo vero labore commodi, quos, doloribus ipsam sequi laboriosam nostrum laudantium harum eum nobis natus officiis. Dolorum, aliquam maxime alias eveniet sit id, consequuntur, rem quibusdam illo nulla est perspiciatis obcaecati. Doloremque laboriosam quasi molestias error?
                    </p>
                </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dignissimos corporis, accusamus, laboriosam tempora, fugiat aperiam atque excepturi assumenda soluta nam. Molestias veniam reprehenderit nisi explicabo autem quis possimus voluptas numquam! Saepe necessitatibus aperiam ab, ipsum perferendis velit beatae vitae reprehenderit provident quas sed, harum pariatur. Mollitia assumenda dolore qui repellendus illo saepe non itaque voluptatum sequi, repellat veniam neque nemo quaerat, tempora cum quam eaque amet necessitatibus nostrum doloremque iste expedita voluptate. Expedita deleniti error nisi quidem consectetur at doloremque sint libero animi numquam esse dolor, delectus laborum iste amet pariatur dolore unde nemo, quasi eligendi! Necessitatibus nobis porro inventore quos est soluta officia, error voluptatum corrupti consequuntur molestias? Sequi nostrum corporis ipsa minima quae nulla quod voluptatem, ut facilis hic maxime delectus nihil officiis non nesciunt! Eveniet, voluptatum? Quisquam earum repellendus assumenda tenetur, quas adipisci eos minus exercitationem nesciunt temporibus libero, odit ad deserunt quam voluptatum officia iure nemo ipsum id, perferendis voluptates sequi aut cupiditate. Cum nulla pariatur illo. Minima nisi earum natus pariatur reiciendis ipsa repudiandae itaque laudantium. Dignissimos, hic. Expedita accusantium praesentium recusandae nihil a ea facilis, perspiciatis asperiores? Aperiam provident, quam quaerat totam, quidem aspernatur tempora quibusdam debitis illum doloribus, delectus at ipsa architecto!</p>
            <div className="row my-5">
                <div className="col-12 col-md-6 my-auto">
                    <img src={props.article.coverImg} alt="img" className="img-fluid"/>
                </div>
                <div className="col-12 col-md-6 my-auto">
                    <img src={props.article.coverImg} alt="img" className="img-fluid"/>
                </div>
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat quia numquam unde eaque laboriosam voluptas iure fuga, minus nulla qui fugit aliquid, corporis voluptatum quis, deserunt architecto quibusdam accusamus pariatur molestias ab maiores? Nemo quaerat quos aliquam veritatis, nostrum atque commodi alias tempora esse? Dolores a dolore necessitatibus? Earum, blanditiis? Odio illo non quis quibusdam inventore! Ut laudantium ipsa deserunt, voluptates quis possimus quae delectus odit odio in placeat accusantium eius, beatae facere blanditiis cupiditate, hic ipsam nostrum earum necessitatibus culpa. A ut illum excepturi totam quisquam, sunt commodi officia fugit, delectus eligendi praesentium, animi soluta aliquid facilis ipsum. Laboriosam ratione aperiam vero impedit facilis fugiat eaque voluptate iusto reiciendis repudiandae expedita perspiciatis error, in maiores incidunt asperiores mollitia quis dignissimos odit. Earum repellendus eveniet quod ab mollitia, exercitationem laborum quo expedita, minus consequatur amet soluta deserunt, consectetur ullam fugiat ad vel reprehenderit? Voluptas, quod quisquam? Laborum ipsam distinctio soluta.</p>
        </section>
    );
};

export default ArticleContent;