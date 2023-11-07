import React from 'react';
import logo from "../assets/images/agency1.jpg"

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <span className='flex flex-col md:flex-row px-3 md:px-0 gap-3'>
                <img className='md:w-[500px] object-cover' src={logo} alt="" />
                <div>
                    <p className="text-justify"><span className='font-bold'>Mission Statement:</span> At BioTech Connect, we are committed to leveraging cutting-edge digital solutions to empower the bio industry. Our mission is to bridge the gap between technology and biology, enabling our clients to innovate, discover, and advance their bio-related projects in an efficient and sustainable manner.</p>
                    <p className="mt-2 text-justify"><span className='font-bold'>Bioinformatics Solutions: </span> Our team of bioinformaticians and data scientists provides custom data analysis, interpretation, and visualization services. We assist in genomics, proteomics, and metabolomics data analysis, helping researchers and biotech companies make data-driven decisions.</p>
                    <p className="mt-2 text-justify"><span className='font-bold'>Bioinformatics Solutions: </span> Our team of bioinformaticians and data scientists provides custom data analysis, interpretation, and visualization services. We assist in genomics, proteomics, and metabolomics data analysis, helping researchers and biotech companies make data-driven decisions.</p>
                </div>

            </span>
        </div>
    );
};

export default About;