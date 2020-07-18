import React from 'react'

export default function HomeContent() {
  return (
    <section className="container">
        <div className="columns features">
            <div className="column is-3">
                <div className="card is-shady">
                    <div className="card-content">
                        <div className="content">
                            <h4>Generation of pdf-document</h4>
                            <p>mm-dok generating document based on your template and your customer database. You can even design your pdf-document via Template-creator.
                                mm-dok generating document based on your template and your customer database. </p>
                            <p><a href="/">Learn more</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="column is-3">
                <div className="card is-shady">
                    <div className="card-content">
                        <div className="content">
                            <h4>Document storage</h4>
                            <p>mm-dok storage manager is based on S3 platform, it is distributed cluster system with high avaliabilityglobal.
                            mm-dok storage manager is based on S3 platform, it is distributed cluster system with high avaliabilityglobal.</p>
                            <p><a href="/">Learn more</a></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="column is-3">
                <div className="card is-shady">
                    <div className="card-content">
                        <div className="content">
                            <h4>Electronic Signature</h4>
                            <p>Your customer will use the function to make electronic signature.
                                Make a documented negetiation is important for most of the businesses today. There is legal requirement.
                            </p>
                            <p><a href="/">Learn more</a></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="column is-3">
                <div className="card is-shady">
                     <div className="card-content">
                        <div className="content">
                            <h4>Document searching</h4>
                            <p>You can search the document in mm-dok with metadata or free text searching. It is possible to search based on different document type.
                            The find your document.
                            </p>
                            <p><a href="/">Learn more</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
