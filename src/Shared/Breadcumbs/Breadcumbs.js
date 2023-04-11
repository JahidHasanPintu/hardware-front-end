import React from 'react';

const Breadcumbs = () => {
    return (
        <div className="w-full mb-[30px]">
            <div className="page-title-wrapper bg-[#FFFAEF] w-full h-[173px] py-10">
                <div className="container-x w-11/12 mx-auto">
                    <div className="mb-5">
                        <div className="text-start breadcrumb-wrapper font-400 text-[13px] text-qblack mb-[23px]"><span><a href="/"><span className="mx-1 capitalize">home</span></a><span className="sperator">/</span></span><span><a href="privacy-policy"><span className="mx-1 capitalize">Privacy Policy</span></a><span className="sperator">/</span></span>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <h1 className="text-3xl font-semibold text-qblack">Privacy Policy</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Breadcumbs;