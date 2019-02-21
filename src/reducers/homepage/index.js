import {FolderEvent} from "../../action/event";

export default function (state = {}, action) {
    switch (action.type) {
        case FolderEvent.UPLOAD:
            return {
                modules: [
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
                ]
            };
        case FolderEvent.HOME:
            return {
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
                ]
            };
        default:
            return {
                modules: []
            };
    }
}