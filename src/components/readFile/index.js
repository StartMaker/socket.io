import * as XLSX from 'xlsx';

/*
            FileReader共有4种读取方法：
            1.readAsArrayBuffer(file)：将文件读取为ArrayBuffer。
            2.readAsBinaryString(file)：将文件读取为二进制字符串
            3.readAsDataURL(file)：将文件读取为Data URL
            4.readAsText(file, [encoding])：将文件读取为文本，encoding缺省值为'UTF-8'
*/

export function ReadFileAsBinaryString(file) {
    let file_reader = new FileReader();
    file_reader.readAsBinaryString(file);
    return file_reader;
}