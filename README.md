# Pdf2PngforWindows
这是一个nodejs库，运行环境是Windows,如果你想运行在Linux上，<br>
请参考：https://github.com/sanpangzi/Pdf2PngforLinux<br>
本库在windows下，可以把一个多页的pdf转成多个png图片
# 怎么使用这个库？
  1. 首先下载到本地任意文件夹，使用之前，确保已安装npm,nodejs<br>
  2. 进入下载后的文件夹，比如：D:\appweb\pdftopngforWindows<br>
     进入之后，运行： npm install<br>
     这个命令，会安装所需的两个模块tmp及filesource<br>
  3. 安装完以上两个模块，就可以运行测试了，测试命令如下：<br>
      node convert.js<br>
      不出意外的话，你会看到test文件夹下，有4张图片，分别是1.png  2.png  3.png  4.png<br>
 # 说明
  1. 本代码是借助Ghostscript实现的，这个Ghostscript可以像本文一样，直接放入文件夹内，也可以删除本文的executables文件夹，<br>
     自己安装Ghostscript，设置环境变量，在path里加入你的安装路径，如果你安装的是64位的Ghostscript，<br>
     要把D:\appweb\pdftopngforWindows\lib\pdf2png.js里的gs改为gswin64；<br>
     之后，把D:\appweb\pdftopngforWindows\lib\pdfPageCount.js里的gs改为gswin64<br>
  2. 本文参考的是：https://www.npmjs.com/package/pdf2png<br>
     或https://github.com/thnew/Pdf2Png<br>
     有兴趣的话，可以看看原版。<br>
  3. 有任何问题，可以在issues中提，也可以联系我，QQ：3207740041<br>
  4. 如果以上帮助到了您，请帮忙打颗星，多谢。
