import React from 'react';

export const {Provider,Consumer} = React.createContext('Light');
export const ProviderForHomePage = {
    modules:[
        {
            title: '新建报表',
            type: 'newFile',
            link: '/homepage/upload',
            dropdownList: []
        },
        {
            title: '我的下载',
            type: 'download',
            link: '/homepage/download',
            dropdownList: []
        },
        {
            title: '文件夹',
            type: 'folder',
            link: '/homepage/folder',
            dropdownList: [
                {
                    title: '重命名'
                }
            ]
        }
    ],
    grid: {
        xs:24,
        sm:24,
        md:5,
        lg:5,
        xl:4,
        xxl:3
    }
};
export const ProviderForUploadPage = {
    modules: [
        {
            title: '新建报表',
            type: 'newFile',
            link: '/homepage/upload',
            dropdownList: []
        },
        {
            title: '编辑视图',
            type: 'viewCompile',
            link: '/homepage/viewCompile',
            dropdownList: []
        },
        {
            title: '报表',
            type: 'reportList',
            link: '/homepage/reportList',
            dropdownList: []
        }
    ],
    grid: {
        xs:8,
        sm:8,
        md:6,
        lg:4
    }
};
