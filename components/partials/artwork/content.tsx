import React from 'react';

// Import Custom Component

// Import Components
import Information from './information';
import Description from './description';
import Details from './details';
import Tags from './tags';
import Actions from './actions';
import Provenance from './provenance';
import Creator from './creator';

// You can now get a ref directly to the DOM button:
export default function Content( { artwork } ) {
    return (
        <section className="assembly-section mt-5 mb-3">
            <Information info={ artwork } />

            <div className="row">
                <div className="col-md-6">                    
                    <Description desc={ artwork.desc } className="" />

                    <Details details={ artwork.details } className="pt-5"/>

                    <Tags tags={ artwork.tags } className="pt-5"/>

                    <Actions actions={ artwork.actions } className="pt-5" />
                </div>

                <div className="col-md-6">
                    <Provenance provenances={ artwork.provenances } className="" />
                </div>
            </div>

            <div className="row pt-6">
                <div className="col-md-12">
                    <Creator creator={ artwork.creator } className="" />
                </div>
            </div>
        </section>
    );
}