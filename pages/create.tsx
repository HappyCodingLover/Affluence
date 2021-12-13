// Import Custom Component

import FileUpload from '../components/common/FileUpload';
import PutOnMarketplace from '../components/partials/common/PutOnMarketplace';

function Create () {
    return (
        <>
            <main className="main">
                <div className="container-fluid mb-1">
                    <div className="row">
                        <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                            <h2>Create multiple collectible in Ethereum</h2>
                            <div className="row">
                                <div className="col-12 col-md-8">
                                    <h4>Upload file</h4>
                                    <FileUpload />
                                    <PutOnMarketplace className="mt-3" />
                                </div>
                                <div className="col-12 col-md-4" style={{ position: 'sticky', top: '110px' }}>
                                    <h4>Preview</h4>
                                    <div style={{ borderRadius: '16px', padding: '1rem 1rem', textAlign: 'center', border: '1px solid rgba(4, 4, 5, 0.1)', height: '320px', alignItems: 'center', display: 'flex' }}>
                                        Upload file to preview your brand new NFT
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Create;