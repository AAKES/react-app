import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from 'react-router-dom';


function Header() {

  return (
       <>
  <div className="Header">
    <Link to="/">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAB9VBMVEX////tGyT9R0b9//88tUz//f////7FBg36////+/////z3////cwD9dAD///v//f7xGST5//v/9//x//+9AAD/bwDqHSSsAAD7dgCzAAD//Pc3uUU4uErI5874/f/8//jBAADdAADMAAAsrz48tFDw3b/1//ToAACmAAC4AAD///TkICLwcQD3agD1dwf1awA2q0PuABjpHCniHSnjLzP4ABD3Ojz1GCH0FyngABv/8/DbAAvk8ub/ZgC54L87qEn/9uKn269EqFf98dztw8Dqn5/qgYDkYWLdUVTSXF7XmZnKiovar7Hs0tX0zdXYRES8ZWSzMTb20MfnkYraOTmzHyfSioPz4+f849vob3rlzcGpRULfhZGuIhq0WF3qsb/Kh47jO0zCSVWkKivvsLLsnJ+zZ2WyCh+ZAADxxbusMkDvU1Lfyc7ucXT9MUbTpanIjZT6QFXwkJvPHiPvRUbkVVTXRl3tnZDutKHddoXtYWTDIzTjinniHUPfXWr5hIPPNEz8ubbPESrbYVTqxLHll6XFOzXjRDzWbWrkvcfpqbjtTF7tYnjcmorv2bPy5LPut4LoeCDn/N9wvnjwilnomVaDvYftiDfxw5uw6LhbuG3vtobeikZqynv2tm6d4qftfzD11KDkmWjzwYTeqIJkpmq21K5MsZvLAAAedUlEQVR4nO19i18bx7n2ysMss7NoZ1eLBKxACwiEkYTQStiLJFsgbr4E8AVi5Bw3CSl8iZv69KshteOcurGbtKQ5h8/AxyXg2g497d953lkJc7GxkS+xfH56Ag7am+bZ9z4zOysIFVRQQQUVVFBBBRVUUEEFFVRQQQUVFMEwIgIiSGAICVhi77o9bx6iooiSxCjVBOww/d8HLkRCMIDB77tuzVsAkkFslIqCoHH8b5Rhemh45MzZc+eHzn8wOuZxNonC+00UY4QwCuBACLHxkZ6WjpYLw2MU1DU9evGLS1cuG4KiyQJ2vM+7buurATGGiKLp4tTEZIeVyYxcRqKhIIYDREiP/uaLD69MYSYTSZLAy76XAAkKsiTkR5KWdaLlap4yFAADZB4P9zT0o387XnfxIwHrSOLW+V4CESalr6VOWGrqD2NIknWNco2k4GgoRpI09Ku6uo/HqKm9j66VcQkiWfwkmfH5Ei0TaSmgKaC0oLlgn6DAJpFl5Pn0eO3xT9MykuBuvF/GCC5SRphMLXSoEdWuHjKJ9DxT04TxDxvqPhySJcw09F4JEiI7YsLlScuVVE9Mj5khgrXnHEaZnv64rq7uioI875kxigxpyky1Zdm91tk0A+Wkz2MoEnCjV+oa6j5L6xJ73hFlC8aIMWy5IqrLumvK4Ekofa4OgrvRzdGGhoZf5wX83tghIkBHVkY6VLU3YZ0LS1IItgjS8w7FMvFgYeh4Z23dGPKIYIvvBU1NFGU20qIm1Ih9Ng2O84WpmShgOgS2eHwIXKr8PjAUGdiWMgEq2ps8MZkGh/Pi5FOkWDeHjjdXHx9CEpbfg0QVaUinN1t8oKOuRF7nm14oFxGsFKPRhuOdxz/SJfweMBQRUmYydsTliqTGZUi+we286HhwSiJQPH+8ofaLPCl3LeVsGFOGknbSViPWLJIpRS+RIRTG4JkC9GJnZ8OlsMSg3ihjOSIAC+S/cak+n8u6auj4iGEcfGj6N50QF3mVUdbJDZJlgu9aPp8dsSfTuixBmDgSZKzlv6hrqD2PCJaOeM67ACOgYcMnQENddmoI2oqP2FuBdV1Co3XHjx8fIrpQxl0cDCFpvCXR61JdmQkUoPSobYU4qGH6f2rrGj7M6+WcvilINqatiMvn6r0QlpDjZo4EsEPCUPpzSFEvKriMU3BMhImMy6WqqjUkoFIdv+wZrWuo/mKUPi/BKxMEUL5IcERG1Cz1bEk519nQ8LkReCuNexNAunFOVSGbcfXkicxKdYlMRlPHjzfUfVDGvlSbUV38v5ZZOeDRSw1rpoi1DxoaOuvyb6VxrwssQugL/9H2+RK9HRcwkTyldxFCuuD5de2vai+JHrn8bBH8iiwMp+yIzxfpuM6w/Aod98AQg7NpOD6kIVZ2DlWTMPFkbF7Wu84aMkLEU6oYeJIu0N9U13VeCrPy6yPWsBy+Zqku8DOZcUnPzxhyqXYIIhSIDNVwdd2ogMpJhoyPeVJglYR8G1zpGapf/tI6exk0F4K+iMQjqiuB44mk/LoBhFjo1imHUgrIYacGVDCCup6jY1y+N3/Mp7aMpLUAEkX64l6MXRDIa5kkQzFc1zCEqFOJvd3WHwWcoUAZ05CcjjgE7TPh4X8/CQx9JzLDaci+JemIDEVJInIIS5ca6hp+A36L12Jvt/VHAUOi9FtJlj0SGj6hcoapezf+/dgxYAixPzV93ZQD5IgmRRDSjIvXhN81NHAh8pGrsmCIhI8//3RMEdl9K8EZnvzyGAcINJFQ1ZZz4wI5cvqG0ueaG2aM4511tR8LEsPlIEPuDc43tzb85fxsKgIMfQlgd5Iz9Pkgu7F9dupaWmEyxgol4qG9MNyWmQel/621urnz+gd1gJmZ/0vLpdrP1zZXtzY3VwND38ljRQA/Hxepz7a+mTFA4SjjPumQSwBBCen5XzdXV1c3f35zcn5+/mTLWYWUSWZjNPCGOXhKkDN0kIBSI3X2IyoQzCQmH3IJQiRJyH/e0lldXdvze8BJn5q6Cuf8okQOx8c7DGuPPcOwF0Rp26mFPNV1dqgMgaA2VNsKAqye/xIEmPTZtnUTlUvYR+efMnxWhi4fTwPUE8nhdEg7NL7hgDDUwAmCfv7+mBN27MwMQWVSR5HL/O5zNB9g6NuxRoDVcz0sY6Qd7NYW+ehpAM3UtVZ3znEBJl22yrO/jiFEyiDic4jGXJFhdc9Thq4dGe7AF0n9YVyRJF3bLxhEPTLRzte1goLOzx9LRHyFU9WOMUh23xGlg6BPDbFnrwy5dvp2Kaq2q3okjTxof1cauFjd/LqzlSvosSSE0J3DW9KCUiYyxOR87UGGJ0EQYIGJxB6GYFsnIreVwH7BMKyFF5q5hzmW5PLboahmNKyURcQXBEm/3FlkOPeUIbfDxGRkv6JC7OiYHNp/NhPTn7U2TP5+nmcIroRvR+pqj4xpmVSJmBjVzQcZQmuT6sjtRMpSI3ZvgntUYOhLuOyWhbzgMSmfkCIzSkj6UvMc6GeEqzT82kU7tM7QI9ddbxuQm367Y4h7Gdr22fsdwyNQNSZ8qr3reU5krmgyIgRJHl2W8pfAwySckMItN6J+9WXB945QwsqEIRXQp88wBJ2LpK4PD/1hYWF+EuQYsXe1NXIiMSMCRVnDZOxXyZORRC+3PhBgwpe8cOvPBRlOQCJbJgwVLPy2+UBSw2Wo9gx/ohuX7164fSth7THHRK+daflxKBTyEHPo/skel837PoC4z3aduX1mPum4J2uGlI0MFYmkaw8kNY6WRnoumwHJzH+dTN47txsgQaCqy8os5GVhdC7RC0aqOv5Ftb46O12dvJN0xJ2ZkcuGIWGEXirE/NqePVpqf/mHtMb4PIX8zW8mvpqfs6BkjBSjQcK25mZ576Mrova6ekFPLWv4duLC+OzwZK/D8LKMD83Uf2EgYHil+VmG6n98nXZGn5Buhof/ePc2n4ZpuwpKCE5VTSRtYAgGC/o5l7w5mfjjDCMTswknxmTyMhPLJFpABYCud+4P+Zxh6k9fk0KVzjs5jJlvJ3tuTyZs2y7UHOBrIc3x9boi8IfVc/tM6mZak5SJZCFpT6YD7Mijc28ZiLJAumF/QHRymtRVvZB2eaCCJ4Zx79y3M9OTqULaCYkqAFyMD0LguVup1nN5IWCY2tWbjh6r8yRw1CHytw8qBrRLzc8wVIe/FwqFBKJ87rNOhMsLqZF7ZyyLR/9eQMJ2RXpT1pmZ+z+OE0OWRYwX7s2BfH3WWTlAy6W2cHCldV9ATECCkrr9ycEBFqLkR+7PfzWS7LUhvVETNlhgZGKkIznjkQsjquirkYzq641YN94FixdhtHNfQOQMrZFx+cDTP0ii5tTE5NV7c0nLtn2QzvWm/rSQvBk25eJkIXQhCbR7fdbNd0LjBZhqeIahej8vH+jxRLouYcEzPJm5ffuCqmaSZ+991QIelzidcc4hk/cskCEE/HfB4kVA3zTvDfkJPn5xPs0OaKkkBbAcwojd/nZ6+szdZGLk/md5pOkBLBXnbUiT1y0bcoDM0PO+5V1CvuYYYnMxXCR46vypJOgHZIiYzDA1RGRevnt/FpT1uikGEEMiLYowPfeffATLyoy9CxYvAhlt7dzDEIKaOnlFIYdOyNB0NL6QGjaIZ//2dGTadqk+K1V2Q90o37A35CddrtSdm5p86JMUOBBAZkj0BPT926f+PGsBQ3su/dabXCIw/XCvlkJunbo3iqRDE0uTMqrBz8GumPE/T1g8ll4om2i/AwldbN0T8n2QdM6MiYf36RIZ/CwTReUAk3xLj53g3eRvvcWlAonXm5t3Q36vy07O5V9Q//AxDCfhOXDA5elpKKV81kiZdHfvIsDyda17GPqs6Rth8pJZ7M/B0LU7qisROTH7Vlr5OiDI+HCPDPlY8G0T05Lnbc/c/JL315wYLpOyYhcgrIucYe18gaHPuvM7TdJKrtL/loL60WdbQ+XHEBcGaIoMeyN25poMDEu9zvmRJB90bBkrk+J3F6LMxmp3AyLU7jd/QK/Qz3LluxTU/1Zmqkw6MHYhyjj9efMehtbt8Ve5zsgI7zi1ModH0ncFRiV2cZeh6rIXpl7lOgtghpC09ZRLF80ukFg0xELI99nJb41Xuc7CbCoS8Vk/lsc0jL3ADMvjtU8ZWr7pH14p77p7T7XBDq+WnQg5kODE/GJOc6dkf69QTISvFqC0cFkTrFwGR/fjXGuxyj/piyS+L/VsRRQIm55OchkOC+XJkBtigaFtnRkt9WzKEE1fmIFoUYYVfhFjUAQ3F6KFdXuqVC1FAlHSf7ll8/Hf8bK0QwGlq5sLFeJJV2Z2qtRGIgFkmJxX7YgKAb/sagsH9LPWhupJzlC1vkmX7EsZQ+nJO7YvoabSsvI2Gvj6+KC50wn5J8GSSs9KIMnLn7sVsVVXj0HKlOFQZyEgnlSTaUl/+fH7IQaEy2f/BEmbelYhZdeL4QCn64oMrZ5xueS6QiTscmqOjwjfUMplwtcBSNpnrUWGqU9KZsg0JFy/+5WtJqyJ8ktLHSAinG91AuLJjomp566E8SIwDaPr186kbFfHDCv5maJfBogbIq+Be098N1WynmFgePvGhYirt2OmfKa07YNIERgil2GP60dUsgwhK6W3UgnblWgZR2X6HCklwiVHhklrAZUsQ0lDyq2b06rts6bIwX7UMgGT0ZVWR0vn8kLJ4RBTREeG/2JDyE+XqwyRjIeaechXJ8dLn3XHqIAW7kTshHrfKFnFfyEggqectM2VGpVLXm2OUSwu/NgbSdpnKS6XaRgHwB9WusRTb9+PU68woYli4dx1l6s3dUOQy5ZhQLjWDFW+OitLpbcRGF64bkd6rQlBL8MHEB2ICP3QWj1/zLqpSyU/f4ipjHomISvNzBJcpkkNAE01A0P7W1EqPWsDX3r/hhpRW2ZI2UwPfhZI+LAZZDikM1oqQ74i2Nzt3qTaMfYqOv7L4SIExOSgXvKSCgJCojE3ARV+y5TMSh/x+OUw2jk/n7zsEUrWM9DMdCblUtUW0PDyzEsLyNf+9djcEJXF0nsx5PzkCHiaxNto1hsE/fyvJ28oOimZIdPE8T9PqKo6/Vba9eYgXpw7eRMFMCm5r42i8fkbLltdeCvtemPAZLT62Gce6RUYMjSWue+zXSNvpWFvDDiQb53/gIZKDhaCoKFPJu5AiX/rLTTrDYJhNvfXV5qyRTQ0PAu1hXXvTbfpzYLK8sX5VxocZRqZnZ6P2GU7aFEEaOfv5l9pgBtrZGK+x6dmym7S3n5Qhj+afqVpd1D1XpvtUSOpspu0tx8ISeGvnS55URQYE6koIr5uMiISIRhyT0IYwzLVGNM0gvjaIJomOisly8LXMz28S/9dc3gxEJa07x2GrABovcJhUkWhApUMpoXCJl+KXTKZJ21MjU2N/TB6/vvvr929unCDPxv0rim8BAgJ2g8FhoJIKV++A/EXImC+dolAdL4WyNj4VPpvfxsb//F8+/n7s9f/84+joxfu3LqVuvFfIz7VOvOuKbwEjCC5MN2HMWoYiLC0YabH0unRmXz+6s17sw2zw2eSI/+ROHnmy0zEl3FlOizrhGXblsUfkU30pkbKuHDiwAGwOIchCaSnfjs+/smn54dHrl69eufOmbM/nj07PT89OdnTk4SfRCSVSmUyrS0tmUxLi9XB0XKiZaLMGTIkFGd7IUeMVKGFB5adF1w4HXDcOg0jnYYfwBRgbOzyOGAIMDNU8vB4BRVUUEEFFVRQQQUVVFCW4K+d4jXAnjWMmDPMgoTXHfPat6wg459e0KsqCuIpB/wpvtf73gMw9MHF9vbFj/7f7sADDpsfLcLGn43X+ypJb3qKUyECHA9dLxghDZsDQcBACCviGx1sM+QH3V2nY11L4aebZH0xGvV2d0UHX+/SNBuMx4MO4vG+zdxy+NAVoxGiONRXVVXVuKK9aYZUfuR1e2Pu7sWnmxT8/2ti7lhNNPx6aoqzQX+jv4DGxqqqvpx52DghYhQvxznDNYLNN7vgrkJWgYzb697e3bbRDQzra+r7X/Pa/wpWtVU9RaM/vhY65EgQIVsOwkHBnPCmGRrmupezicXCiPLFmgxqrNfX1Lhj9Q+1XaV6ziK4VBT3jBpS+swbStAayA6kV5BjYxunKEqoMKRNiz1zglhkKGSBYWMwK7C9a7zyxRefHnUQ0IAjeArJWHLXu93umq5FpBmcYXgjCoxrYt7VHWfKGF8l4ODyKsCo+AUihb3iMwzFlaC/yt/Y1xePxxu5mlZVxbNSwNxhKO65bSJDOWDoDzbtvwbv5TlsiWHepCMMzLL+aD1n6K55FNbhSw29fwk+g5Z6H+w5fXcdhN1NqPjgLzUURSEQdQ4coGwCLX/fT+BKsyt9fkdVN7XiaroI4gfmgWGn8SBxYBhf3v8dzlIbcCufS5EvkvZyhrS9K+Z2GMb6dVFBBtrywicg6d0oTKlkAgUCKHBwEDRADdF5dQOSCdGeMxsj1AZy8w+cci7x04Bji1xGznX4EIBhmjuT9JlIVvxgqgP7LRWkp5mA5yojlhiTXj7HQfzOW2TYvYhAb4T2JW9BqF2LpMgQ0XB/2DioKkiBbYVmCOFwGBp74IBQvLENGIYkQcaSyZUQGOaUgu7DDdFCIWc1Pqe1IgKGfv/mAV+EBQSHaTu+Z/9tpJp2hMcY0IY3VlPvBlLd22JYCuir4FfhU7072k7DVEaCHF58sLq+vrrVjohCsdy+/WBrazuNBjcefseFJ/QvPngI+7fbw/LOE/dgPExo4pz8K5QhGWFRc/Q0uMINFhTUXM6tbG6urGVDSMIEIwiHoNL+FdAblHucW3u8dorJxCMUDssqWdgC2xB4pNxj2G8qIWfPT5rnJauko22QYcxdA5SWwiImi9F6L3wAjtF+UzcMTH9+GO0GEddEo9sGCEN/cLrGGz3dvhGNnd6QjbCwsRQF11sPGx+2K8XlvBkmjGUdhmv8NbN8G9fCqsZNihSMtaaVviC3O398IGvC7SB4uY1/XOOhP86lGdfgIlpuAGIqOOGVvzuZwzJhwmbc7w/2hbID8SD4r+AaUV7iUFdBgjG3twYi/CLWQ+tAmDeYE1b0sKJsdcFHd009UOjapojJq15+wqOo193VrlBztctdA2dzqXuX2onhGD8TQWqOXvpzzksCAGtBh6EIHFC2z4kfEED8oLiEL5zBw2GjP0eQknVc8ArSpRB4Yz9X9YKbqmoLwaXgY2NV2+O+wkZ/X5P4Elt84uYS40Jzr2JzsQsiIY8W9e51PtQib0SBHnCGLbH66M+aTB/yUBLjv9FBDfi6Y7EYlzH8W/Owv5DBixRJ5lohhLNiMMs5DAeAoZYd4M1rBIrwD7TRNCiEw0YeDpEQ2mwEhn1ZgSg5TpATbywyDGOmxeEcOLXI2g+38MUrHYhRHvqij6I19d5ov/GkPuZdWo9xGa4SakCGWs8VOLoE/4PUboPKxhOeA4EYYzXdYbJ1OhYD31vj9bodW97QHb9HFc6QtyuYlYq2mavakeFyn78NUBXkwoCtm6ZEIQFq5EeLoNycwUBIEZrificX8heIQqwxMTvF74SfM4w7pMEMXjzVJQ3U6uujg1wQ0Z83uurdNdv/gG1u7xaEAWU9xtu9Oti/yG9BzQND7uc7QWDermhMbo86fnhpo30jxs3XvR5ynrRDIpHMTYfhMpIUxmeQrrRBeGxcEVBorYq3MLgGYbLKX9XWGF+WkPDYEecpaRnk2+cP/gsb2ibsbPP35ZqyawWua9TEjv8CjrB5hfMOrrzknYv5KLSrfklYBz2rX3/C5dm+DWKFcAgM27tBHWtW+4neH/XW13T/TMhg1ImW0fWNxQ30KAp/1jzpJ2FtMQra7F7qLwYQqIb6nCxmmUgK+FYsDHCGcMdxUx+oYVX8J8SU0KYfzCqexXADnOC5HPpnnJvoSkiiTSDqqjY4ThLJT/GCxocL/gu0vUkBslycK+KLtbS9mwe/VfJzlxcMDYzKu40ecoYQHgVtm+es0X493L/t5r6oX6b8hPp677qBdJQGB+Ouj7brpqmH18EZ1cQGixlLsVao6gsHGKRKkhSKcw/BrQbSVTC0NerBHlxI1XKMKFzijQPLK9zMeJpAtTWeMbStKR4sSU19jsbjMCvG1SyTpFP82ODjl9jhhpsH/G3SH4PkG9SvfimvPeFZW3e7TMNLIJb69fb2B0vdoIPRLQi5G5ADgaNtJ6ImO7enflVR+qkZXgf7rIkOOjaBRKFQK1RtKjI4YJAjmBf4/WATVhw3E1yWCCEsy1lDQREIDfDUtc0RdFVfE3/dNXAGj7IsUZOSx47XasIh9rhgkUgiYKeF2/NChmgLROOObmF9FcIBEOv6B+5f4hblHtTpYDf3I0sQD2t4kvMPmWpkixeT3ge6IYTJBt/RvYU0nRk6jzPuWL8zIsyrIUedGldEWSFYZtxDApu+kBQKgu41DmhSCMk463caiQOhPj/X3YKDzFKJgNP0t/kbB6gnhDBacWz6FDbZ3xsLGbxEKHe/fhDsoQ8KUE0Ok1WehXZ9R8OQn0ILveuKwC0NTDNMCJihEwrhcze4G8bXO17loaS7nYDqCVuOn10EpTT4feFBtJhDQozKVTmmo5jgPSWaC/LYEFyT8SmH+ZoGVZKkrLUBDfC3XKe5Z+XhA2wXIxMvc1dbtSZIJiHgfsBrtsEZ2gDEx8Y+HVhD/OEMm/Chbw0RKcTndUc67UQOQ40Ri4H10XbuLevXTSK3dwFVEFl0aXUjLSuQB4sIikcIjP1QZxG65ZjpIkGIyFA2gwN+qBWKKLgZuUI4BB1D2MwOOLErvsyEAsOVEFNEKeS0HBjhLPf8VU45WRXPIY8iLMd5NgMMiQR3ix83AFEWkjtQ5E1n4cU1uAXBtuXDGSKKCpbm7u4nMtoCYrFVTRbbu8GV1KxC+e8wdD9qH+zX9bApowASlSXuhpbC6CnD7geiQWkY3DBcaEPcVw2B6fD0n2Qh6YQEBjy7xygw3NQ8ErQ8yH0plFSMywNiXNAJ59yTkuU4970rokfGEED5Xog0AngXCKsrztuiitXICxkGBqM8JYuGIZNajHZ1dw9CzbUBLrHeu0VMMsj9pnfb1HVtcP1Bf5gSIcwzBPdDRAkkvGCHkAmsDyqkf5vHVchlhWL0daohYAjVYfZfK32FGL15SpJM2fGx8RzRQj/1FRwNJigHfzVWDeQe81wn+JNmslNxx+ksm6GmAR5JeaQhTjrvb8vxr+AK0OjfVALaoQxFAbwhL5yeaIak6SCqQWIY+iOvw1APk/ASZAM10dX2/Ba4m/XFMBIG4YR67yNCNYqKAd8be7S9dDoGbLtXdx60Q4x/P2cSj/OMhAPSM4yoWfAa/vja45W407fRtuwhvMeD0xGycR7jBnJNLNQWrOIKmVsD5+uksDlgyDMezhCUFJwTD4fscIYgBnkRvGWsfl2mCimK1QBfAtu6Fill5EEXMHTXdHV1cwl1/7cgQG4D9Dcg3UGGHn7oVFpOZsvLk6VB2XAYUiotFzqhGgtwcuRsoQODN7Kww9kfz4GSan/nRrciEHPADwKHTAbxgtHJ7YJt3Mtyrwn5fI4zhDoaUojlPrgB/hxDhzKE1FbY8EJS7eW3nu4wVJ7AppqudlBEvR/KYR4m63lody8tCuBQvJCFblCikHAANJuT45kdd8TRRU02nYk0VARX2Pi0l82RwD+bTKeMYrxiKOzrA93ry4UYY2SAS3MFISkXdBK0x1ji1uek5o0DfwcJN8abGOE1WFtV3ynuyprikBLwzP7Q8okBmy0vv/1bcvGhf2BlcKfKM9UAZNny4BK/BfU81+5eHzS5P3KDK10EhsigsvYzEO7mpYfXG11fRKS43jH4G6iBij2lvLOtb+CxJuDCS0fZqc0dvYUdkJJggS7zXI0bmhTaBOXkCh1QHvMyys9T0BW+l8cFxfmrbZnPmssWNkrioXOwgTzdPu31ek9v6GG5MAtSAUOMwiZvFLItZCAyuA0WCNVv99JGmMhE2D7d5eV1INSdBO4Han8YjXV54YAnW/0aYWKhowF4/ivO+9jACuG3byUbkkTGaGGSHw3lBvrijbwnfIULVqQgD34cGJoROLXZF+ceEnLbHPwV7BtoElfg0GA8JMnhf/JrDpggHpJzLg250aEpDVyatC+2A/p3ZAi2KRrOpkVgKMqGQcTBxa2trY12SACoouDBwk5gR2WkmGGBDG7w/eCFAuBGqOxoO7T5VPbpoMWywt/Hxn+cL6GiJISyOUBTSGRQXFGRafy47ClMwh4J9j3OImYIHroMB2VDGDc5F0OYGIW/JP7S81POxUOSVrbPhVVQQQUVVFBBBRVUUEEFFVRQQQUVVFBBBRVUUEEFFVRQQQUVVFBBBRVUUEEFFVRQQQUVvA/4H90e+4TK60z9AAAAAElFTkSuQmCC " alt="try to understand" className='Header_logo'/>
      </Link>
      <div className="Header_locator">
          <div className="Header_locatorimg">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-05FTkyqVmCWgoOHY7F7wnE2rXqQfUZmylA&usqp=CAU" alt="" />
          </div>
      <div className="Header_location">Pokhara</div>
      </div>
      

      <div className="Header_search">
          <div className='All'>
              <select >
                  <option value="">All</option>
                  <option value="">All Department</option>
                  <option value="">Arts and crafts</option>
                  <option value="">Books</option>
                  <option value="">Baby</option>
                  <option value="">Beauty</option>
                  <option value="">Design</option>
                  <option value="">Ideas</option>
                  <option value="">Visitors</option>
                  <option value="">Tourism</option>
              </select>
          </div>
          <input type="text"/>
          <SearchIcon className="Header_SearchIcon"/>
      </div>
      <div className="Header_nav">
          <div className="Header_option">
              <span className="Header_optionone">Bishal</span>
              <Link to ="/signin">
              <span className="Header_optiontwo">Sign In</span>
              </Link>
              
          </div>
          <div className="Header_option">
              <span className="Header_optionone">Return</span>
              <span className="Header_optiontwo">& Order </span>
          </div>
          <div className="Header_option">
              <span className="Header_optionone">Your</span>
              <span className="Header_optiontwo">Prime</span>
          </div>
          <div className="Header_basket">
              <Link to="/cart">
              <ShoppingBasketIcon />
              <span>Add to cart</span>
              </Link>
          </div>
        
      </div>
  </div>
  <div className="Header_buttom">
      <ul>
          <li>All</li>
          <li>Fancy</li>
          <Link to='/shoes'>
              <li>Shoes</li></Link>
          <Link to='/clothes'><li>Clothes</li></Link>
          <Link to='/electronics'>
          <li>Electronics</li>
          </Link>
          <li>customer services</li>
      </ul>
  </div>
  </>
  )
}

export default Header;
