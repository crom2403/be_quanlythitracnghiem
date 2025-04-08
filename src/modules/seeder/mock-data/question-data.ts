/* eslint-disable @typescript-eslint/no-unused-vars */
import { Answer, Question } from 'src/modules/content';
const questionData1: Partial<Question>[] = [
  {
    id: 1,
    content:
      'Biến cục bộ (local variable) được khai báo bên trong phạm vi nào?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: 'Bên trong hàm mà nó được khai báo',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Bên ngoài tất cả các hàm',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Trong toàn bộ chương trình',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Trong một tệp nguồn',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 2,
    content:
      'Kiểu dữ liệu nào sau đây được sử dụng để lưu trữ một ký tự đơn trong C?',
    difficulty_level: 'easy',
    answers: [
      { id: 5, content: 'int', is_correct: false, order_index: 1 },
      { id: 6, content: 'float', is_correct: false, order_index: 2 },
      { id: 7, content: 'char', is_correct: true, order_index: 3 },
      { id: 8, content: 'string', is_correct: false, order_index: 4 },
    ] as Answer[],
  },
  {
    id: 3,
    content:
      'Toán tử nào sau đây được sử dụng để gán giá trị cho một biến trong C?',
    difficulty_level: 'easy',
    answers: [
      { id: 9, content: '==', is_correct: false, order_index: 1 },
      { id: 10, content: '=', is_correct: true, order_index: 2 },
      { id: 11, content: '+', is_correct: false, order_index: 3 },
      { id: 12, content: '-', is_correct: false, order_index: 4 },
    ] as Answer[],
  },
  {
    id: 4,
    content:
      'Cấu trúc điều khiển nào sau đây cho phép thực hiện một khối lệnh nhiều lần dựa trên một điều kiện?',
    difficulty_level: 'easy',
    answers: [
      { id: 13, content: 'if', is_correct: false, order_index: 1 },
      { id: 14, content: 'switch', is_correct: false, order_index: 2 },
      { id: 15, content: 'for', is_correct: true, order_index: 3 },
      { id: 16, content: 'return', is_correct: false, order_index: 4 },
    ] as Answer[],
  },
  {
    id: 5,
    content: 'Hàm `printf()` được định nghĩa trong thư viện tiêu đề nào?',
    difficulty_level: 'medium',
    answers: [
      { id: 17, content: 'stdio.h', is_correct: true, order_index: 1 },
      { id: 18, content: 'stdlib.h', is_correct: false, order_index: 2 },
      { id: 19, content: 'math.h', is_correct: false, order_index: 3 },
      { id: 20, content: 'string.h', is_correct: false, order_index: 4 },
    ] as Answer[],
  },
  {
    id: 6,
    content: 'Con trỏ (pointer) là gì trong C?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 21,
        content: 'Một biến lưu trữ địa chỉ bộ nhớ của một biến khác',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 22,
        content: 'Một kiểu dữ liệu đặc biệt để lưu trữ số nguyên lớn',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 23,
        content: 'Một hàm đặc biệt để thực hiện các phép toán số học',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 24,
        content: 'Một cấu trúc dữ liệu để lưu trữ nhiều giá trị cùng kiểu',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 7,
    content: 'Hàm `malloc()` được sử dụng để làm gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 25,
        content: 'Giải phóng bộ nhớ đã cấp phát',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 26,
        content: 'Cấp phát bộ nhớ động',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 27,
        content: 'Đọc dữ liệu từ tệp',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 28,
        content: 'In dữ liệu ra màn hình',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 8,
    content: 'Sự khác biệt chính giữa `struct` và `union` trong C là gì?',
    difficulty_level: 'hard',
    answers: [
      {
        id: 29,
        content:
          'Các thành viên của `struct` chia sẻ cùng một vùng nhớ, trong khi các thành viên của `union` có vùng nhớ riêng biệt',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 30,
        content:
          'Các thành viên của `union` chia sẻ cùng một vùng nhớ, trong khi các thành viên của `struct` có vùng nhớ riêng biệt',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 31,
        content:
          '`struct` được sử dụng cho các kiểu dữ liệu nguyên thủy, còn `union` cho các kiểu dữ liệu phức tạp',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 32,
        content: 'Không có sự khác biệt nào giữa `struct` và `union`',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 9,
    content: 'Hàm nào sau đây được sử dụng để so sánh hai chuỗi trong C?',
    difficulty_level: 'medium',
    answers: [
      { id: 33, content: 'strcpy()', is_correct: false, order_index: 1 },
      { id: 34, content: 'strcat()', is_correct: false, order_index: 2 },
      { id: 35, content: 'strcmp()', is_correct: true, order_index: 3 },
      { id: 36, content: 'strlen()', is_correct: false, order_index: 4 },
    ] as Answer[],
  },
  {
    id: 10,
    content: 'Định nghĩa nào sau đây về mảng (array) trong C là đúng?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 37,
        content:
          'Một tập hợp các phần tử có kiểu dữ liệu khác nhau được lưu trữ liên tiếp trong bộ nhớ',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 38,
        content:
          'Một tập hợp các phần tử có cùng kiểu dữ liệu được lưu trữ không liên tiếp trong bộ nhớ',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 39,
        content:
          'Một tập hợp các phần tử có cùng kiểu dữ liệu được lưu trữ liên tiếp trong bộ nhớ',
        is_correct: true,
        order_index: 3,
      },
      {
        id: 40,
        content: 'Một biến đơn lẻ có thể lưu trữ nhiều giá trị',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  // Câu hỏi 11 (Easy)
  {
    id: 11,
    content:
      'Thư viện nào trong C cung cấp các hàm toán học cơ bản như `sqrt()`, `pow()`?',
    difficulty_level: 'easy',
    answers: [
      { id: 41, content: 'stdio.h', is_correct: false, order_index: 1 },
      { id: 42, content: 'stdlib.h', is_correct: false, order_index: 2 },
      { id: 43, content: 'math.h', is_correct: true, order_index: 3 },
      { id: 44, content: 'string.h', is_correct: false, order_index: 4 },
    ] as Answer[],
  },
  // Câu hỏi 12 (Easy)
  {
    id: 12,
    content:
      'Vòng lặp `while` sẽ tiếp tục thực hiện các câu lệnh bên trong nó cho đến khi nào?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 45,
        content: 'Điều kiện trong `while` trở thành `true`',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 46,
        content: 'Điều kiện trong `while` trở thành `false`',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 47,
        content: 'Vòng lặp được gọi một số lần cố định',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 48,
        content: 'Không có điều kiện nào được chỉ định',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  // Câu hỏi 13 (Easy)
  {
    id: 13,
    content: 'Ký tự đặc biệt nào được sử dụng để kết thúc một chuỗi trong C?',
    difficulty_level: 'easy',
    answers: [
      { id: 49, content: '\\n', is_correct: false, order_index: 1 },
      { id: 50, content: '\\t', is_correct: false, order_index: 2 },
      { id: 51, content: '\\0', is_correct: true, order_index: 3 },
      { id: 52, content: 'null', is_correct: false, order_index: 4 },
    ] as Answer[],
  },
  // Câu hỏi 14 (Easy)
  {
    id: 14,
    content: 'Từ khóa nào được sử dụng để khai báo một hằng số trong C?',
    difficulty_level: 'easy',
    answers: [
      { id: 53, content: 'variable', is_correct: false, order_index: 1 },
      { id: 54, content: 'static', is_correct: false, order_index: 2 },
      { id: 55, content: 'const', is_correct: true, order_index: 3 },
      { id: 56, content: 'readonly', is_correct: false, order_index: 4 },
    ] as Answer[],
  },
  // Câu hỏi 15 (Medium)
  {
    id: 15,
    content:
      'Điều gì xảy ra khi bạn cố gắng truy cập một phần tử mảng vượt quá kích thước của nó trong C?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 57,
        content: 'Chương trình sẽ báo lỗi biên dịch',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 58,
        content:
          'Chương trình sẽ báo lỗi runtime (segmentation fault hoặc tương tự)',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 59,
        content: 'Phần tử đầu tiên của mảng sẽ được trả về',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 60,
        content: 'Một giá trị mặc định (thường là 0) sẽ được trả về',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  // Câu hỏi 16 (Medium)
  {
    id: 16,
    content: 'Hàm `fopen()` trả về giá trị gì khi không thể mở tệp thành công?',
    difficulty_level: 'medium',
    answers: [
      { id: 61, content: '0', is_correct: false, order_index: 1 },
      { id: 62, content: '1', is_correct: false, order_index: 2 },
      { id: 63, content: 'NULL', is_correct: true, order_index: 3 },
      { id: 64, content: '-1', is_correct: false, order_index: 4 },
    ] as Answer[],
  },
  // Câu hỏi 17 (Medium)
  {
    id: 17,
    content:
      'Sự khác biệt giữa truyền tham trị (pass by value) và truyền tham chiếu (pass by reference) trong C là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 65,
        content:
          'Truyền tham trị tạo ra một bản sao của biến, truyền tham chiếu truyền địa chỉ của biến',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 66,
        content:
          'Truyền tham chiếu tạo ra một bản sao của biến, truyền tham trị truyền địa chỉ của biến',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 67,
        content: 'Không có sự khác biệt nào giữa hai cách truyền tham số này',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 68,
        content:
          'Truyền tham trị chỉ áp dụng cho kiểu dữ liệu nguyên thủy, truyền tham chiếu cho kiểu dữ liệu phức tạp',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  // Câu hỏi 18 (Medium)
  {
    id: 18,
    content: 'Toán tử `->` được sử dụng để làm gì trong C?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 69,
        content:
          'Truy cập thành viên của một cấu trúc (struct) hoặc hợp (union) thông qua biến trực tiếp',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 70,
        content:
          'Truy cập thành viên của một cấu trúc (struct) hoặc hợp (union) thông qua con trỏ',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 71,
        content: 'Thực hiện phép gán giá trị cho con trỏ',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 72,
        content: 'So sánh hai con trỏ',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  // Câu hỏi 19 (Hard)
  {
    id: 19,
    content: 'Đệ quy (recursion) là gì và khi nào nên sử dụng nó trong C?',
    difficulty_level: 'hard',
    answers: [
      {
        id: 73,
        content:
          'Đệ quy là một hàm gọi chính nó, nên sử dụng khi giải quyết các bài toán có cấu trúc lặp tự nhiên',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 74,
        content:
          'Đệ quy là một hàm gọi một hàm khác, nên sử dụng để tối ưu hóa hiệu suất',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 75,
        content:
          'Đệ quy là một kỹ thuật lặp sử dụng vòng lặp `for`, nên sử dụng cho các bài toán có số lần lặp cố định',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 76,
        content:
          'Không nên sử dụng đệ quy trong C vì nó có thể gây ra tràn bộ nhớ stack',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  // Câu hỏi 20 (Hard)
  {
    id: 20,
    content:
      'Giải thích về con trỏ hàm (function pointer) trong C và ứng dụng của nó.',
    difficulty_level: 'hard',
    answers: [
      {
        id: 77,
        content:
          'Con trỏ hàm là một biến lưu trữ địa chỉ của một hàm, cho phép truyền hàm như một đối số hoặc gọi hàm gián tiếp',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 78,
        content:
          'Con trỏ hàm là một hàm trả về một con trỏ, được sử dụng để cấp phát bộ nhớ động',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 79,
        content:
          'Con trỏ hàm là một cách để khai báo một hàm bên trong một cấu trúc',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 80,
        content: 'Không có khái niệm con trỏ hàm trong C',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  // Câu hỏi 21 (Easy)
  {
    id: 21,
    content:
      'Kiểu dữ liệu nào sau đây được sử dụng để lưu trữ số nguyên không dấu?',
    difficulty_level: 'easy',
    answers: [
      { id: 81, content: 'int', is_correct: false, order_index: 1 },
      { id: 82, content: 'float', is_correct: false, order_index: 2 },
      { id: 83, content: 'char', is_correct: false, order_index: 3 },
      { id: 84, content: 'unsigned int', is_correct: true, order_index: 4 },
    ] as Answer[],
  },
  // Câu hỏi 22 (Easy)
  {
    id: 22,
    content: 'Toán tử `%` được sử dụng để làm gì trong C?',
    difficulty_level: 'easy',
    answers: [
      { id: 85, content: 'Phép chia', is_correct: false, order_index: 1 },
      { id: 86, content: 'Phép nhân', is_correct: false, order_index: 2 },
      { id: 87, content: 'Phép lấy số dư', is_correct: true, order_index: 3 },
      { id: 88, content: 'Phép lũy thừa', is_correct: false, order_index: 4 },
    ] as Answer[],
  },
  // Câu hỏi 23 (Easy)
  {
    id: 23,
    content: 'Câu lệnh `if-else` được sử dụng để làm gì?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 89,
        content: 'Lặp lại một khối lệnh nhiều lần',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 90,
        content: 'Định nghĩa một hàm mới',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 91,
        content: 'Thực hiện có điều kiện một khối lệnh',
        is_correct: true,
        order_index: 3,
      },
      {
        id: 92,
        content: 'Khai báo một biến',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  // Câu hỏi 24 (Easy)
  {
    id: 24,
    content: 'Thư viện nào trong C cung cấp các hàm liên quan đến chuỗi?',
    difficulty_level: 'easy',
    answers: [
      { id: 93, content: 'stdio.h', is_correct: false, order_index: 1 },
      { id: 94, content: 'stdlib.h', is_correct: false, order_index: 2 },
      { id: 95, content: 'math.h', is_correct: false, order_index: 3 },
      { id: 96, content: 'string.h', is_correct: true, order_index: 4 },
    ] as Answer[],
  },
  // Câu hỏi 25 (Medium)
  {
    id: 25,
    content: 'Hàm `scanf()` được sử dụng để làm gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 97,
        content: 'In dữ liệu ra màn hình',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 98,
        content: 'Đọc dữ liệu từ bàn phím',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 99,
        content: 'Ghi dữ liệu vào tệp',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 100,
        content: 'Cấp phát bộ nhớ',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  // Câu hỏi 26 (Medium)
  {
    id: 26,
    content: 'Mảng và con trỏ có mối quan hệ như thế nào trong C?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 101,
        content:
          'Tên của một mảng hoạt động như một con trỏ đến phần tử đầu tiên của mảng',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 102,
        content: 'Không có mối quan hệ nào giữa mảng và con trỏ',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 103,
        content: 'Con trỏ có thể lưu trữ kích thước của một mảng',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 104,
        content: 'Mảng có thể lưu trữ địa chỉ của các con trỏ',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  // Câu hỏi 27 (Medium)
  {
    id: 27,
    content: 'Hàm `free()` được sử dụng để làm gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 105,
        content: 'Cấp phát bộ nhớ động',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 106,
        content: 'Thay đổi kích thước bộ nhớ đã cấp phát',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 107,
        content: 'Giải phóng bộ nhớ đã cấp phát động',
        is_correct: true,
        order_index: 3,
      },
      {
        id: 108,
        content: 'Kiểm tra xem bộ nhớ đã được cấp phát hay chưa',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  // Câu hỏi 28 (Medium)
  {
    id: 28,
    content:
      'Sự khác biệt giữa `static` và `auto` (nếu không có từ khóa nào) đối với biến cục bộ là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 109,
        content:
          '`static` biến giữ giá trị giữa các lần gọi hàm, `auto` biến được tạo và hủy mỗi khi hàm được gọi',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 110,
        content:
          '`auto` biến giữ giá trị giữa các lần gọi hàm, `static` biến được tạo và hủy mỗi khi hàm được gọi',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 111,
        content:
          'Không có sự khác biệt nào giữa `static` và `auto` đối với biến cục bộ',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 112,
        content:
          '`static` chỉ áp dụng cho kiểu số nguyên, `auto` cho các kiểu dữ liệu khác',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  // Câu hỏi 29 (Hard)
  {
    id: 29,
    content:
      'Giải thích về `volatile` keyword trong C và khi nào nên sử dụng nó.',
    difficulty_level: 'hard',
    answers: [
      {
        id: 113,
        content:
          '`volatile` báo cho trình biên dịch biết rằng biến có thể bị thay đổi bởi các yếu tố bên ngoài chương trình, ngăn chặn tối ưu hóa không đúng cách',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 114,
        content: '`volatile` được sử dụng để khai báo các biến chỉ đọc',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 115,
        content:
          '`volatile` được sử dụng để cấp phát bộ nhớ động không thể thay đổi',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 116,
        content: 'Không có keyword `volatile` trong C',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  // Câu hỏi 30 (Hard)
  {
    id: 30,
    content:
      'Sự khác biệt giữa #include <filename.h> và#include filename.h là gì?',
    difficulty_level: 'hard',
    answers: [
      {
        id: 117,
        content:
          '`<>` tìm kiếm tệp trong các thư mục hệ thống, `""` tìm kiếm trong thư mục hiện tại trước',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 118,
        content: ` tìm kiếm tệp trong các thư mục hệ thống,  tìm kiếm trong thư mục hiện tại trước`,
        is_correct: false,
        order_index: 2,
      },
      {
        id: 119,
        content: 'Không có sự khác biệt nào giữa hai cách sử dụng',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 120,
        content: `dùng cho tệp C, dùng cho tệp header`,
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  // Câu hỏi 31 (Easy)
  {
    id: 31,
    content:
      'Giá trị trả về mặc định của hàm `main()` trong C là gì nếu không có câu lệnh `return`?',
    difficulty_level: 'easy',
    answers: [
      { id: 121, content: '-1', is_correct: false, order_index: 1 },
      { id: 122, content: '0', is_correct: true, order_index: 2 },
      { id: 123, content: '1', is_correct: false, order_index: 3 },
      {
        id: 124,
        content: 'Một giá trị ngẫu nhiên',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  // Câu hỏi 32 (Easy)
  {
    id: 32,
    content:
      'Ký tự định dạng nào được sử dụng với `printf()` để in một số nguyên thập phân?',
    difficulty_level: 'easy',
    answers: [
      { id: 125, content: '%f', is_correct: false, order_index: 1 },
      { id: 126, content: '%c', is_correct: false, order_index: 2 },
      { id: 127, content: '%s', is_correct: false, order_index: 3 },
      { id: 128, content: '%d', is_correct: true, order_index: 4 },
    ] as Answer[],
  },
  // Câu hỏi 33 (Easy)
  {
    id: 33,
    content: 'Vòng lặp `do-while` khác với vòng lặp `while` ở điểm nào?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 129,
        content: '`do-while` kiểm tra điều kiện trước khi thực hiện vòng lặp',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 130,
        content: '`do-while` luôn thực hiện ít nhất một lần',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 131,
        content: 'Không có sự khác biệt nào',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 132,
        content: '`do-while` không sử dụng điều kiện',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  // Câu hỏi 34 (Easy)
  {
    id: 34,
    content:
      'Từ khóa `break` được sử dụng để làm gì trong vòng lặp hoặc câu lệnh `switch`?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 133,
        content: 'Tiếp tục vòng lặp ở lần lặp tiếp theo',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 134,
        content: 'Thoát khỏi vòng lặp hoặc câu lệnh `switch` ngay lập tức',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 135,
        content: 'Bỏ qua phần còn lại của lần lặp hiện tại',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 136,
        content: 'Khởi tạo lại biến điều khiển vòng lặp',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  // Câu hỏi 35 (Medium)
  {
    id: 35,
    content: 'Hàm `realloc()` được sử dụng để làm gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 137,
        content: 'Cấp phát bộ nhớ động mới',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 138,
        content: 'Giải phóng bộ nhớ đã cấp phát',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 139,
        content: 'Thay đổi kích thước của khối bộ nhớ đã được cấp phát động',
        is_correct: true,
        order_index: 3,
      },
      {
        id: 140,
        content: 'Sao chép nội dung của một khối bộ nhớ sang một khối khác',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  // Câu hỏi 36 (Medium)
  {
    id: 36,
    content: 'Con trỏ null là gì trong C?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 141,
        content: 'Một con trỏ trỏ đến địa chỉ bộ nhớ 0',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 142,
        content: 'Một con trỏ chưa được khởi tạo',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 143,
        content: 'Một con trỏ trỏ đến cuối bộ nhớ',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 144,
        content: 'Một con trỏ không thể thay đổi giá trị',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  // Câu hỏi 37 (Medium)
  {
    id: 37,
    content: 'Cấu trúc (struct) trong C cho phép bạn làm gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 145,
        content:
          'Định nghĩa một kiểu dữ liệu mới chứa các thành viên có cùng kiểu dữ liệu',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 146,
        content:
          'Định nghĩa một kiểu dữ liệu mới chứa các thành viên có kiểu dữ liệu khác nhau',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 147,
        content: 'Tạo ra một hàm có thể trả về nhiều giá trị',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 148,
        content: 'Quản lý bộ nhớ động một cách hiệu quả hơn',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  // Câu hỏi 38 (Medium)
  {
    id: 38,
    content: 'Biến toàn cục (global variable) được khai báo ở đâu?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 149,
        content: 'Bên trong một hàm cụ thể',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 150,
        content: 'Chỉ trong hàm `main()`',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 151,
        content: 'Bên ngoài tất cả các hàm',
        is_correct: true,
        order_index: 3,
      },
      {
        id: 152,
        content: 'Trong một khối lệnh nhất định',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  // Câu hỏi 39 (Hard)
  {
    id: 39,
    content:
      'Giải thích về memory leak (rò rỉ bộ nhớ) trong C và cách phòng tránh nó.',
    difficulty_level: 'hard',
    answers: [
      {
        id: 153,
        content:
          'Rò rỉ bộ nhớ xảy ra khi bộ nhớ đã cấp phát động không được giải phóng sau khi sử dụng, cần sử dụng `free()` để giải phóng',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 154,
        content:
          'Rò rỉ bộ nhớ xảy ra khi truy cập bộ nhớ vượt quá giới hạn, cần kiểm tra kích thước mảng',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 155,
        content:
          'Rò rỉ bộ nhớ là một lỗi biên dịch, cần sửa lỗi trước khi chạy chương trình',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 156,
        content: 'Không có khái niệm rò rỉ bộ nhớ trong C',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  // Câu hỏi 40 (Hard)
  {
    id: 40,
    content: 'Bitwise operators (toán tử bit) trong C được sử dụng để làm gì?',
    difficulty_level: 'hard',
    answers: [
      {
        id: 157,
        content: 'Thực hiện các phép toán số học trên các số nguyên',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 158,
        content: 'Thực hiện các phép toán logic trên các giá trị boolean',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 159,
        content: 'Thao tác trực tiếp trên các bit của dữ liệu',
        is_correct: true,
        order_index: 3,
      },
      {
        id: 160,
        content: 'So sánh các giá trị số',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  // Câu hỏi 41 (Easy)
  {
    id: 41,
    content: 'Ký tự định dạng nào được sử dụng với `printf()` để in một chuỗi?',
    difficulty_level: 'easy',
    answers: [
      { id: 161, content: '%d', is_correct: false, order_index: 1 },
      { id: 162, content: '%f', is_correct: false, order_index: 2 },
      { id: 163, content: '%c', is_correct: false, order_index: 3 },
      { id: 164, content: '%s', is_correct: true, order_index: 4 },
    ] as Answer[],
  },
  // Câu hỏi 42 (Easy)
  {
    id: 42,
    content: 'Câu lệnh `switch` được sử dụng để làm gì?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 165,
        content: 'Lặp lại một khối lệnh',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 166,
        content: 'Định nghĩa một biến',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 167,
        content:
          'Chọn một trong nhiều khối lệnh để thực hiện dựa trên giá trị của một biểu thức',
        is_correct: true,
        order_index: 3,
      },
      {
        id: 168,
        content: 'Thoát khỏi chương trình',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  // Câu hỏi 43 (Easy)
  {
    id: 43,
    content: 'Giá trị của biểu thức `5 == 5` trong C là gì?',
    difficulty_level: 'easy',
    answers: [
      { id: 169, content: '5', is_correct: false, order_index: 1 },
      { id: 170, content: 'true (hoặc 1)', is_correct: true, order_index: 2 },
      { id: 171, content: 'false (hoặc 0)', is_correct: false, order_index: 3 },
      { id: 172, content: 'Không xác định', is_correct: false, order_index: 4 },
    ] as Answer[],
  },
  // Câu hỏi 44 (Easy)
  {
    id: 44,
    content: 'Toán tử `&&` đại diện cho phép toán logic nào?',
    difficulty_level: 'easy',
    answers: [
      { id: 173, content: 'OR', is_correct: false, order_index: 1 },
      { id: 174, content: 'NOT', is_correct: false, order_index: 2 },
      { id: 175, content: 'AND', is_correct: true, order_index: 3 },
      { id: 176, content: 'XOR', is_correct: false, order_index: 4 },
    ] as Answer[],
  },
  // Câu hỏi 45 (Medium)
  {
    id: 45,
    content: 'Hàm `strcpy()` được sử dụng để làm gì?',
    difficulty_level: 'medium',
    answers: [
      { id: 177, content: 'Nối hai chuỗi', is_correct: false, order_index: 1 },
      {
        id: 178,
        content: 'So sánh hai chuỗi',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 179,
        content: 'Sao chép một chuỗi sang một chuỗi khác',
        is_correct: true,
        order_index: 3,
      },
      {
        id: 180,
        content: 'Tìm độ dài của một chuỗi',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 46,
    content: 'Con trỏ void (`void *`) là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 181,
        content: 'Một con trỏ không trỏ đến đâu cả',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 182,
        content: 'Một con trỏ có thể trỏ đến bất kỳ kiểu dữ liệu nào',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 183,
        content: 'Một con trỏ chỉ có thể trỏ đến kiểu `void`',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 184,
        content: 'Một con trỏ không thể được dereference',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  // Câu hỏi 47 (Medium)
  {
    id: 47,
    content: 'Hợp (union) trong C cho phép bạn làm gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 185,
        content:
          'Lưu trữ nhiều giá trị có cùng kiểu dữ liệu tại các vùng nhớ khác nhau',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 186,
        content:
          'Lưu trữ một giá trị có thể có nhiều kiểu dữ liệu khác nhau tại cùng một vùng nhớ',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 187,
        content: 'Định nghĩa các hàm có thể trả về nhiều kiểu dữ liệu',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 188,
        content: 'Tạo ra các mảng đa chiều một cách dễ dàng hơn',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  // Câu hỏi 48 (Medium)
  {
    id: 48,
    content:
      'Biến tĩnh cục bộ (static local variable) khác với biến cục bộ thông thường như thế nào?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 189,
        content:
          'Biến tĩnh cục bộ chỉ có thể được truy cập bên trong hàm mà nó được khai báo',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 190,
        content: 'Biến tĩnh cục bộ giữ giá trị của nó giữa các lần gọi hàm',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 191,
        content: 'Biến tĩnh cục bộ được lưu trữ trong bộ nhớ heap',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 192,
        content: 'Biến tĩnh cục bộ có phạm vi toàn cục',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  // Câu hỏi 49 (Hard)
  {
    id: 49,
    content:
      'Giải thích về dangling pointer (con trỏ treo) trong C và nguy cơ của nó.',
    difficulty_level: 'hard',
    answers: [
      {
        id: 193,
        content:
          'Con trỏ treo là một con trỏ trỏ đến một vùng nhớ đã được giải phóng, việc dereference nó có thể gây ra lỗi không xác định',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 194,
        content:
          'Con trỏ treo là một con trỏ chưa được khởi tạo, cần gán địa chỉ trước khi sử dụng',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 195,
        content:
          'Con trỏ treo là một con trỏ trỏ đến một vùng nhớ chỉ đọc, việc ghi vào nó sẽ gây ra lỗi',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 196,
        content: 'Không có khái niệm con trỏ treo trong C',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  // Câu hỏi 50 (Hard)
  {
    id: 50,
    content: 'Sự khác biệt giữa macro (`#define`) và hàm trong C là gì?',
    difficulty_level: 'hard',
    answers: [
      {
        id: 197,
        content:
          'Macro được thay thế trực tiếp vào mã nguồn trước khi biên dịch, hàm được gọi tại thời điểm chạy',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 198,
        content:
          'Hàm được thay thế trực tiếp vào mã nguồn trước khi biên dịch, macro được gọi tại thời điểm chạy',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 199,
        content:
          'Macro chỉ có thể nhận các đối số là số nguyên, hàm có thể nhận nhiều kiểu dữ liệu',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 200,
        content: 'Không có sự khác biệt đáng kể giữa macro và hàm',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
];

const questionData2: Partial<Question>[] = [
  {
    id: 51,
    content:
      'Độ phức tạp thời gian trung bình để tìm kiếm một phần tử trong một mảng chưa được sắp xếp là bao nhiêu?',
    difficulty_level: 'easy',
    answers: [
      { id: 201, content: 'O(1)', is_correct: false, order_index: 1 },
      { id: 202, content: 'O(log n)', is_correct: false, order_index: 2 },
      { id: 203, content: 'O(n)', is_correct: true, order_index: 3 },
      { id: 204, content: 'O(n log n)', is_correct: false, order_index: 4 },
    ] as Answer[],
  },
  {
    id: 52,
    content:
      'Cấu trúc dữ liệu nào sau đây hoạt động theo nguyên tắc LIFO (Last-In, First-Out)?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 205,
        content: 'Hàng đợi (Queue)',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 206,
        content: 'Ngăn xếp (Stack)',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 207,
        content: 'Danh sách liên kết (Linked List)',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 208,
        content: 'Cây nhị phân tìm kiếm (Binary Search Tree)',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 53,
    content:
      'Thuật toán sắp xếp nào sau đây có độ phức tạp thời gian trung bình là O(n log n)?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 209,
        content: 'Sắp xếp nổi bọt (Bubble Sort)',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 210,
        content: 'Sắp xếp chèn (Insertion Sort)',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 211,
        content: 'Sắp xếp trộn (Merge Sort)',
        is_correct: true,
        order_index: 3,
      },
      {
        id: 212,
        content: 'Sắp xếp chọn (Selection Sort)',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 54,
    content:
      'Thao tác nào sau đây không phải là thao tác cơ bản của một hàng đợi (Queue)?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 213,
        content: 'Enqueue (Thêm vào cuối)',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 214,
        content: 'Dequeue (Lấy ra từ đầu)',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 215,
        content: 'Peek (Xem phần tử đầu)',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 216,
        content: 'Pop (Lấy ra từ cuối)',
        is_correct: true,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 55,
    content:
      'Cấu trúc dữ liệu nào sau đây thường được sử dụng để triển khai thuật toán tìm kiếm theo chiều rộng (BFS)?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 217,
        content: 'Ngăn xếp (Stack)',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 218,
        content: 'Hàng đợi (Queue)',
        is_correct: true,
        order_index: 2,
      },
      { id: 219, content: 'Cây (Tree)', is_correct: false, order_index: 3 },
      { id: 220, content: 'Đồ thị (Graph)', is_correct: false, order_index: 4 },
    ] as Answer[],
  },
  {
    id: 56,
    content:
      'Độ phức tạp không gian của thuật toán sắp xếp nổi bọt (Bubble Sort) là bao nhiêu?',
    difficulty_level: 'easy',
    answers: [
      { id: 221, content: 'O(1)', is_correct: true, order_index: 1 },
      { id: 222, content: 'O(log n)', is_correct: false, order_index: 2 },
      { id: 223, content: 'O(n)', is_correct: false, order_index: 3 },
      { id: 224, content: 'O(n log n)', is_correct: false, order_index: 4 },
    ] as Answer[],
  },
  {
    id: 57,
    content:
      'Trong một cây nhị phân tìm kiếm (Binary Search Tree), các nút bên trái của một nút có giá trị như thế nào so với nút đó?',
    difficulty_level: 'easy',
    answers: [
      { id: 225, content: 'Lớn hơn', is_correct: false, order_index: 1 },
      { id: 226, content: 'Nhỏ hơn', is_correct: true, order_index: 2 },
      { id: 227, content: 'Bằng nhau', is_correct: false, order_index: 3 },
      {
        id: 228,
        content: 'Không có mối quan hệ cụ thể',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 58,
    content:
      'Thuật toán tìm kiếm nào sau đây yêu cầu dữ liệu phải được sắp xếp trước?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 229,
        content: 'Tìm kiếm tuyến tính (Linear Search)',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 230,
        content: 'Tìm kiếm theo chiều rộng (BFS)',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 231,
        content: 'Tìm kiếm theo chiều sâu (DFS)',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 232,
        content: 'Tìm kiếm nhị phân (Binary Search)',
        is_correct: true,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 59,
    content:
      "Cấu trúc dữ liệu nào sau đây thường được sử dụng để biểu diễn mối quan hệ 'nhiều-nhiều'?",
    difficulty_level: 'medium',
    answers: [
      { id: 233, content: 'Mảng (Array)', is_correct: false, order_index: 1 },
      {
        id: 234,
        content: 'Danh sách liên kết (Linked List)',
        is_correct: false,
        order_index: 2,
      },
      { id: 235, content: 'Cây (Tree)', is_correct: false, order_index: 3 },
      { id: 236, content: 'Đồ thị (Graph)', is_correct: true, order_index: 4 },
    ] as Answer[],
  },
  {
    id: 60,
    content:
      'Độ phức tạp thời gian tốt nhất của thuật toán sắp xếp chèn (Insertion Sort) là bao nhiêu?',
    difficulty_level: 'medium',
    answers: [
      { id: 237, content: 'O(1)', is_correct: false, order_index: 1 },
      { id: 238, content: 'O(log n)', is_correct: false, order_index: 2 },
      { id: 239, content: 'O(n)', is_correct: true, order_index: 3 },
      { id: 240, content: 'O(n^2)', is_correct: false, order_index: 4 },
    ] as Answer[],
  },
  {
    id: 61,
    content:
      'Thao tác nào sau đây có độ phức tạp thời gian O(1) trong một danh sách liên kết đơn?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 241,
        content: 'Tìm kiếm một phần tử cụ thể',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 242,
        content: 'Chèn một phần tử vào giữa danh sách',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 243,
        content: 'Xóa phần tử đầu tiên',
        is_correct: true,
        order_index: 3,
      },
      {
        id: 244,
        content: 'Tìm phần tử cuối cùng',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 62,
    content:
      'Cấu trúc dữ liệu nào sau đây thường được sử dụng để triển khai thuật toán tìm kiếm theo chiều sâu (DFS)?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 245,
        content: 'Hàng đợi (Queue)',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 246,
        content: 'Ngăn xếp (Stack)',
        is_correct: true,
        order_index: 2,
      },
      { id: 247, content: 'Cây (Tree)', is_correct: false, order_index: 3 },
      { id: 248, content: 'Đồ thị (Graph)', is_correct: false, order_index: 4 },
    ] as Answer[],
  },
  {
    id: 63,
    content:
      'Thuật toán sắp xếp nào sau đây có độ phức tạp thời gian xấu nhất là O(n^2)?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 249,
        content: 'Sắp xếp trộn (Merge Sort)',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 250,
        content: 'Sắp xếp nhanh (Quick Sort)',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 251,
        content: 'Sắp xếp vun đống (Heap Sort)',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 252,
        content: 'Sắp xếp đếm (Counting Sort)',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 64,
    content: 'Trong một cây AVL, điều gì được đảm bảo?',
    difficulty_level: 'hard',
    answers: [
      {
        id: 253,
        content: 'Tất cả các lá đều ở cùng một độ sâu',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 254,
        content: 'Cây luôn là một cây nhị phân hoàn chỉnh',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 255,
        content:
          'Chênh lệch chiều cao giữa hai cây con của mọi nút tối đa là 1',
        is_correct: true,
        order_index: 3,
      },
      {
        id: 256,
        content: 'Giá trị của nút cha luôn lớn hơn giá trị của các nút con',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 65,
    content: 'Cấu trúc dữ liệu nào sau đây là một dạng của đồ thị?',
    difficulty_level: 'medium',
    answers: [
      { id: 257, content: 'Mảng (Array)', is_correct: false, order_index: 1 },
      {
        id: 258,
        content: 'Danh sách liên kết (Linked List)',
        is_correct: false,
        order_index: 2,
      },
      { id: 259, content: 'Cây (Tree)', is_correct: true, order_index: 3 },
      {
        id: 260,
        content: 'Hàng đợi (Queue)',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 66,
    content:
      'Độ phức tạp thời gian tốt nhất của thuật toán tìm kiếm nhị phân (Binary Search) là bao nhiêu?',
    difficulty_level: 'easy',
    answers: [
      { id: 261, content: 'O(1)', is_correct: true, order_index: 1 },
      { id: 262, content: 'O(log n)', is_correct: false, order_index: 2 },
      { id: 263, content: 'O(n)', is_correct: false, order_index: 3 },
      { id: 264, content: 'O(n log n)', is_correct: false, order_index: 4 },
    ] as Answer[],
  },
  {
    id: 67,
    content:
      'Trong một hàng đợi ưu tiên (Priority Queue), các phần tử được lấy ra theo thứ tự nào?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 265,
        content: 'Theo thứ tự chèn vào',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 266,
        content: 'Theo thứ tự ngược lại với thứ tự chèn vào',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 267,
        content: 'Theo độ ưu tiên của chúng',
        is_correct: true,
        order_index: 3,
      },
      {
        id: 268,
        content: 'Theo địa chỉ bộ nhớ của chúng',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 68,
    content:
      'Thuật toán sắp xếp nào sau đây thường được sử dụng để sắp xếp các danh sách liên kết lớn?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 269,
        content: 'Sắp xếp nổi bọt (Bubble Sort)',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 270,
        content: 'Sắp xếp chèn (Insertion Sort)',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 271,
        content: 'Sắp xếp chọn (Selection Sort)',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 272,
        content: 'Sắp xếp trộn (Merge Sort)',
        is_correct: true,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 69,
    content:
      'Hash table (bảng băm) thường cung cấp độ phức tạp thời gian trung bình là bao nhiêu cho các thao tác tìm kiếm, chèn và xóa?',
    difficulty_level: 'medium',
    answers: [
      { id: 273, content: 'O(log n)', is_correct: false, order_index: 1 },
      { id: 274, content: 'O(n)', is_correct: false, order_index: 2 },
      { id: 275, content: 'O(1)', is_correct: true, order_index: 3 },
      { id: 276, content: 'O(n log n)', is_correct: false, order_index: 4 },
    ] as Answer[],
  },
  {
    id: 70,
    content:
      'Trong thuật toán Dijkstra, cấu trúc dữ liệu nào thường được sử dụng để lưu trữ khoảng cách tạm thời đến các nút?',
    difficulty_level: 'hard',
    answers: [
      {
        id: 277,
        content: 'Hàng đợi (Queue)',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 278,
        content: 'Ngăn xếp (Stack)',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 279,
        content: 'Cây nhị phân tìm kiếm (Binary Search Tree)',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 280,
        content: 'Hàng đợi ưu tiên (Priority Queue)',
        is_correct: true,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 71,
    content:
      'Thuật toán nào sau đây được sử dụng để tìm đường đi ngắn nhất giữa tất cả các cặp đỉnh trong một đồ thị có trọng số âm?',
    difficulty_level: 'hard',
    answers: [
      {
        id: 281,
        content: 'Thuật toán Dijkstra',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 282,
        content: 'Thuật toán Kruskal',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 283,
        content: 'Thuật toán Floyd-Warshall',
        is_correct: true,
        order_index: 3,
      },
      {
        id: 284,
        content: 'Thuật toán Prim',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 72,
    content:
      'Trong một cây đỏ-đen (Red-Black Tree), tính chất nào sau đây luôn được duy trì?',
    difficulty_level: 'hard',
    answers: [
      {
        id: 285,
        content: 'Tất cả các nút đều có màu đỏ hoặc đen',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 286,
        content: 'Tất cả các nút đen đều có hai nút con đen',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 287,
        content: 'Đường đi từ gốc đến bất kỳ lá nào chứa cùng số lượng nút đỏ',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 288,
        content: 'Chiều cao của cây luôn là logarit cơ số 2 của số lượng nút',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 73,
    content:
      'Kỹ thuật lập trình động (Dynamic Programming) thường được áp dụng cho các bài toán có đặc điểm nào?',
    difficulty_level: 'hard',
    answers: [
      {
        id: 289,
        content: 'Bài toán có cấu trúc con tối ưu và các bài toán con độc lập',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 290,
        content:
          'Bài toán có cấu trúc con tối ưu và các bài toán con chồng chéo',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 291,
        content: 'Bài toán có không gian trạng thái nhỏ',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 292,
        content: 'Bài toán yêu cầu tìm tất cả các nghiệm có thể',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 74,
    content:
      'Giải thuật tham lam (Greedy Algorithm) không phải lúc nào cũng tìm được nghiệm tối ưu. Điều này thường xảy ra khi nào?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 293,
        content: 'Khi bài toán có cấu trúc con tối ưu',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 294,
        content:
          'Khi lựa chọn cục bộ tối ưu không dẫn đến nghiệm toàn cục tối ưu',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 295,
        content: 'Khi bài toán có các ràng buộc đơn giản',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 296,
        content: 'Khi các bước của giải thuật có thể đảo ngược',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 75,
    content:
      'Trong thuật toán sắp xếp vun đống (Heap Sort), cấu trúc dữ liệu nào được sử dụng?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 297,
        content: 'Mảng (Array) được coi như một cây nhị phân gần hoàn chỉnh',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 298,
        content: 'Danh sách liên kết (Linked List)',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 299,
        content: 'Cây nhị phân tìm kiếm (Binary Search Tree)',
        is_correct: false,
        order_index: 3,
      },
      { id: 300, content: 'Đồ thị (Graph)', is_correct: false, order_index: 4 },
    ] as Answer[],
  },
  {
    id: 76,
    content:
      'Độ phức tạp không gian của thuật toán sắp xếp trộn (Merge Sort) là bao nhiêu?',
    difficulty_level: 'medium',
    answers: [
      { id: 301, content: 'O(1)', is_correct: false, order_index: 1 },
      { id: 302, content: 'O(log n)', is_correct: false, order_index: 2 },
      { id: 303, content: 'O(n)', is_correct: true, order_index: 3 },
      { id: 304, content: 'O(n log n)', is_correct: false, order_index: 4 },
    ] as Answer[],
  },
  {
    id: 77,
    content: 'Trong một đồ thị vô hướng, bậc của một đỉnh là gì?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 305,
        content: 'Số lượng đỉnh kề với nó',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 306,
        content: 'Số lượng cạnh trong đồ thị',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 307,
        content: 'Chiều dài đường đi ngắn nhất đến đỉnh khác',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 308,
        content: 'Số lượng đỉnh có thể đạt được từ nó',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 78,
    content:
      'Cấu trúc dữ liệu nào sau đây cho phép chèn và xóa phần tử ở cả hai đầu một cách hiệu quả?',
    difficulty_level: 'medium',
    answers: [
      { id: 309, content: 'Mảng (Array)', is_correct: false, order_index: 1 },
      {
        id: 310,
        content: 'Hàng đợi (Queue)',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 311,
        content: 'Deque (Double-ended Queue)',
        is_correct: true,
        order_index: 3,
      },
      {
        id: 312,
        content: 'Ngăn xếp (Stack)',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 79,
    content: 'Hash function (hàm băm) tốt cần có thuộc tính nào sau đây?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 313,
        content: 'Tạo ra cùng một giá trị băm cho các đầu vào khác nhau',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 314,
        content: 'Phân phối đều các giá trị băm trên không gian địa chỉ',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 315,
        content: 'Luôn tạo ra các giá trị băm lớn',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 316,
        content: 'Thực hiện rất chậm để đảm bảo tính bảo mật',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 80,
    content:
      'Trong thuật toán Prim, cấu trúc dữ liệu nào thường được sử dụng để chọn cạnh có trọng số nhỏ nhất kết nối cây hiện tại với các đỉnh chưa thuộc cây?',
    difficulty_level: 'hard',
    answers: [
      {
        id: 317,
        content: 'Hàng đợi (Queue)',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 318,
        content: 'Ngăn xếp (Stack)',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 319,
        content: 'Danh sách liên kết (Linked List) đã sắp xếp',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 320,
        content: 'Hàng đợi ưu tiên (Priority Queue)',
        is_correct: true,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 81,
    content:
      'Kỹ thuật chia để trị (Divide and Conquer) thường bao gồm mấy bước chính?',
    difficulty_level: 'medium',
    answers: [
      { id: 321, content: '2', is_correct: false, order_index: 1 },
      { id: 322, content: '3', is_correct: true, order_index: 2 },
      { id: 323, content: '4', is_correct: false, order_index: 3 },
      { id: 324, content: '5', is_correct: false, order_index: 4 },
    ] as Answer[],
  },
  {
    id: 82,
    content:
      'Trong thuật toán tìm kiếm chuỗi Knuth-Morris-Pratt (KMP), bảng tiền xử lý (prefix function) được sử dụng để làm gì?',
    difficulty_level: 'hard',
    answers: [
      {
        id: 325,
        content: 'Lưu trữ tất cả các tiền tố của mẫu',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 326,
        content:
          'Xác định độ dài tiền tố dài nhất của mẫu cũng là hậu tố của phần mẫu đã khớp',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 327,
        content: 'So sánh mẫu với văn bản một cách hiệu quả hơn',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 328,
        content: 'Đánh dấu các vị trí khớp của mẫu trong văn bản',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 83,
    content:
      'Cây khung nhỏ nhất (Minimum Spanning Tree) của một đồ thị liên thông, vô hướng và có trọng số là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 329,
        content:
          'Một cây con bao gồm tất cả các đỉnh của đồ thị và có tổng trọng số cạnh lớn nhất',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 330,
        content:
          'Một cây con bao gồm một số đỉnh của đồ thị và có tổng trọng số cạnh nhỏ nhất',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 331,
        content:
          'Một cây con bao gồm tất cả các đỉnh của đồ thị và có tổng trọng số cạnh nhỏ nhất',
        is_correct: true,
        order_index: 3,
      },
      {
        id: 332,
        content:
          'Một chu trình bao gồm tất cả các đỉnh của đồ thị với tổng trọng số cạnh nhỏ nhất',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 84,
    content:
      'Trong thuật toán sắp xếp nhanh (Quick Sort), việc chọn phần tử trụ (pivot) ảnh hưởng đến điều gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 333,
        content: 'Độ phức tạp không gian của thuật toán',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 334,
        content: 'Độ ổn định của thuật toán',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 335,
        content: 'Hiệu suất thời gian của thuật toán',
        is_correct: true,
        order_index: 3,
      },
      {
        id: 336,
        content: 'Tính song song hóa của thuật toán',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 85,
    content:
      'Cấu trúc dữ liệu nào sau đây thường được sử dụng để triển khai bộ nhớ cache?',
    difficulty_level: 'medium',
    answers: [
      { id: 337, content: 'Mảng (Array)', is_correct: false, order_index: 1 },
      {
        id: 338,
        content: 'Danh sách liên kết (Linked List)',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 339,
        content: 'Bảng băm (Hash Table)',
        is_correct: true,
        order_index: 3,
      },
      {
        id: 340,
        content: 'Cây nhị phân tìm kiếm (Binary Search Tree)',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 86,
    content: 'Trong lý thuyết đồ thị, một chu trình Euler là gì?',
    difficulty_level: 'hard',
    answers: [
      {
        id: 341,
        content: 'Một đường đi đi qua mỗi đỉnh của đồ thị đúng một lần',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 342,
        content: 'Một chu trình đi qua mỗi đỉnh của đồ thị đúng một lần',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 343,
        content: 'Một đường đi đi qua mỗi cạnh của đồ thị đúng một lần',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 344,
        content: 'Một chu trình đi qua mỗi cạnh của đồ thị đúng một lần',
        is_correct: true,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 87,
    content:
      'Giải thuật quay lui (Backtracking) thường được sử dụng để giải các bài toán nào?',
    difficulty_level: 'hard',
    answers: [
      {
        id: 345,
        content: 'Bài toán tìm đường đi ngắn nhất',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 346,
        content: 'Bài toán tối ưu hóa có ràng buộc',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 347,
        content: 'Bài toán sắp xếp dữ liệu lớn',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 348,
        content: 'Bài toán tìm kiếm trong không gian nhỏ',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 88,
    content:
      'Trong cấu trúc dữ liệu đồ thị, ma trận kề (adjacency matrix) được sử dụng để biểu diễn điều gì?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 349,
        content: 'Danh sách các đỉnh của đồ thị',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 350,
        content: 'Danh sách các cạnh của đồ thị',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 351,
        content: 'Sự tồn tại của cạnh giữa các cặp đỉnh',
        is_correct: true,
        order_index: 3,
      },
      {
        id: 352,
        content: 'Trọng số của các cạnh trong đồ thị',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 89,
    content: 'Thuật toán tô màu đồ thị (Graph Coloring) nhằm mục đích gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 353,
        content: 'Tìm đường đi ngắn nhất trong đồ thị',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 354,
        content:
          'Gán màu cho các đỉnh sao cho không có hai đỉnh kề nhau có cùng màu',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 355,
        content: 'Tìm cây khung nhỏ nhất của đồ thị',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 356,
        content: 'Phân loại các cạnh của đồ thị',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 90,
    content:
      'Trong một cây Trie (tiền tố), các nút thường lưu trữ thông tin gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 357,
        content: 'Toàn bộ các từ được lưu trữ',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 358,
        content: 'Các ký tự của các tiền tố',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 359,
        content: 'Tần suất xuất hiện của các từ',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 360,
        content: 'Độ dài của các từ',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 91,
    content:
      'Thuật toán tìm kiếm A* thường sử dụng hàm heuristic (h) để ước tính điều gì?',
    difficulty_level: 'hard',
    answers: [
      {
        id: 361,
        content: 'Chi phí thực tế từ nút bắt đầu đến nút hiện tại',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 362,
        content: 'Tổng chi phí thực tế của đường đi đã tìm thấy',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 363,
        content: 'Chi phí ước tính từ nút hiện tại đến nút mục tiêu',
        is_correct: true,
        order_index: 3,
      },
      {
        id: 364,
        content:
          'Chi phí ước tính của toàn bộ đường đi từ bắt đầu đến mục tiêu',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 92,
    content:
      'Trong ngữ cảnh của bộ nhớ đệm (caching), chiến lược thay thế LRU (Least Recently Used) hoạt động như thế nào?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 365,
        content: 'Loại bỏ mục được sử dụng gần đây nhất',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 366,
        content: 'Loại bỏ mục được sử dụng ít thường xuyên nhất',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 367,
        content: 'Loại bỏ mục đã không được sử dụng trong thời gian dài nhất',
        is_correct: true,
        order_index: 3,
      },
      {
        id: 368,
        content: 'Loại bỏ mục được chèn vào bộ nhớ đệm đầu tiên',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 93,
    content:
      'Cấu trúc dữ liệu nào sau đây thường được sử dụng để triển khai biểu đồ quan hệ giữa các đối tượng?',
    difficulty_level: 'medium',
    answers: [
      { id: 369, content: 'Mảng (Array)', is_correct: false, order_index: 1 },
      { id: 370, content: 'Cây (Tree)', is_correct: false, order_index: 2 },
      { id: 371, content: 'Đồ thị (Graph)', is_correct: true, order_index: 3 },
      {
        id: 372,
        content: 'Danh sách liên kết (Linked List)',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 94,
    content:
      'Trong thuật toán Kruskal để tìm cây khung nhỏ nhất, các cạnh của đồ thị được xem xét theo thứ tự nào?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 373,
        content: 'Theo thứ tự ngẫu nhiên',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 374,
        content: 'Theo thứ tự trọng số tăng dần',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 375,
        content: 'Theo thứ tự trọng số giảm dần',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 376,
        content: 'Theo thứ tự đỉnh kết nối',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 95,
    content:
      'Kỹ thuật memoization trong lập trình động (Dynamic Programming) dùng để làm gì?',
    difficulty_level: 'hard',
    answers: [
      {
        id: 377,
        content: 'Chia bài toán thành các bài toán con độc lập',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 378,
        content:
          'Lưu trữ kết quả của các bài toán con đã giải để tránh tính toán lại',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 379,
        content: 'Sử dụng đệ quy để giải bài toán',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 380,
        content: 'Tối ưu hóa không gian bộ nhớ sử dụng',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 96,
    content: 'Trong một cây B, bậc của cây (order) xác định điều gì?',
    difficulty_level: 'hard',
    answers: [
      {
        id: 381,
        content: 'Chiều cao tối đa của cây',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 382,
        content: 'Số lượng nút tối đa trong cây',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 383,
        content: 'Số lượng con tối đa mà một nút có thể có',
        is_correct: true,
        order_index: 3,
      },
      {
        id: 384,
        content: 'Số lượng khóa tối thiểu trong nút gốc',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 97,
    content:
      'Thuật toán tô màu đồ thị với mục tiêu sử dụng số lượng màu tối thiểu được gọi là gì?',
    difficulty_level: 'hard',
    answers: [
      {
        id: 385,
        content: 'Tô màu tham lam (Greedy Coloring)',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 386,
        content: 'Bài toán số màu đồ thị (Graph Coloring Problem)',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 387,
        content: 'Tìm kiếm theo chiều sâu (DFS)',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 388,
        content: 'Tìm kiếm theo chiều rộng (BFS)',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 98,
    content:
      'Trong cấu trúc dữ liệu Trie, thao tác tìm kiếm một từ có độ phức tạp thời gian là bao nhiêu (với độ dài từ là k)?',
    difficulty_level: 'medium',
    answers: [
      { id: 389, content: 'O(1)', is_correct: false, order_index: 1 },
      { id: 390, content: 'O(log n)', is_correct: false, order_index: 2 },
      { id: 391, content: 'O(k)', is_correct: true, order_index: 3 },
      { id: 392, content: 'O(n)', is_correct: false, order_index: 4 },
    ] as Answer[],
  },
  {
    id: 99,
    content:
      'Giải thuật Ford-Fulkerson thường được sử dụng để giải bài toán nào?',
    difficulty_level: 'hard',
    answers: [
      {
        id: 393,
        content: 'Tìm đường đi ngắn nhất',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 394,
        content: 'Tìm cây khung nhỏ nhất',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 395,
        content: 'Tìm luồng cực đại trong mạng',
        is_correct: true,
        order_index: 3,
      },
      {
        id: 396,
        content: 'Bài toán tô màu đồ thị',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 100,
    content:
      'Trong cấu trúc dữ liệu rời rạc (Disjoint Set Data Structure), thao tác Find thường được sử dụng để làm gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 397,
        content: 'Hợp hai tập hợp',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 398,
        content: 'Kiểm tra xem hai phần tử có thuộc cùng một tập hợp hay không',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 399,
        content: 'Tìm đại diện của tập hợp chứa một phần tử',
        is_correct: true,
        order_index: 3,
      },
      {
        id: 400,
        content: 'Tạo một tập hợp mới chứa một phần tử',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
];

const questionData3: Partial<Question>[] = [
  {
    id: 101,
    content:
      'Đặc điểm nào sau đây là trụ cột của Lập trình hướng đối tượng (OOP)?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Chỉ kế thừa',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Đóng gói, kế thừa và đa hình',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Chỉ đa hình',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Tuần tự, lựa chọn và lặp',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 102,
    content: 'Trong Java, từ khóa nào được sử dụng để khai báo một lớp?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: 'struct',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content: 'object',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'class',
        is_correct: true,
        order_index: 3,
      },
      {
        id: 4,
        content: 'type',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 103,
    content: 'Phương thức khởi tạo (constructor) trong Java có đặc điểm gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Có kiểu trả về là void',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Có tên trùng với tên lớp',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Chỉ được khai báo một lần trong một lớp',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Được gọi tường minh bằng tên đối tượng',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 104,
    content: 'Trong Java, từ khóa nào được sử dụng để thể hiện tính kế thừa?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: 'implements',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content: 'inherits',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'extends',
        is_correct: true,
        order_index: 3,
      },
      {
        id: 4,
        content: 'subclass',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 105,
    content: 'Tính đa hình (polymorphism) trong OOP cho phép điều gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Một lớp có nhiều thuộc tính',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Một đối tượng có nhiều trạng thái',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content:
          'Các đối tượng thuộc các lớp khác nhau có thể phản ứng với cùng một thông điệp theo những cách khác nhau',
        is_correct: true,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Một phương thức có thể có nhiều tên',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 106,
    content: 'Trong Java, interface và abstract class khác nhau như thế nào?',
    difficulty_level: 'hard',
    answers: [
      {
        id: 1,
        content:
          'Interface có thể chứa các phương thức có triển khai, abstract class thì không',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content:
          'Một lớp có thể kế thừa nhiều abstract class nhưng chỉ có thể implements một interface',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content:
          'Interface chỉ chứa các khai báo phương thức trừu tượng và hằng số, abstract class có thể chứa cả phương thức trừu tượng và phương thức có triển khai',
        is_correct: true,
        order_index: 3,
      },
      {
        id: 4,
        content:
          'Không có sự khác biệt đáng kể giữa interface và abstract class',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 107,
    content:
      'Từ khóa nào trong Java được sử dụng để gọi phương thức của lớp cha từ lớp con?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'this',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content: 'parent',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'super',
        is_correct: true,
        order_index: 3,
      },
      {
        id: 4,
        content: 'base',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 108,
    content:
      'Mục đích chính của việc đóng gói (encapsulation) trong OOP là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Tăng tốc độ thực thi của chương trình',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content:
          'Ẩn giấu thông tin và bảo vệ dữ liệu khỏi sự truy cập trực tiếp từ bên ngoài',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Giảm dung lượng bộ nhớ sử dụng',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Làm cho code dễ đọc hơn',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 109,
    content:
      'Trong Java, modifier nào cho phép một thành viên của lớp được truy cập từ bất kỳ lớp nào?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: 'private',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content: 'protected',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'public',
        is_correct: true,
        order_index: 3,
      },
      {
        id: 4,
        content: 'default (không có modifier)',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 110,
    content:
      'Khi nào thì một phương thức được gọi là phương thức trừu tượng (abstract method) trong Java?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Khi nó được khai báo trong một interface',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Khi nó không có phần thân (body)',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Khi nó được khai báo là static',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Khi nó được gọi từ lớp cha',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 111,
    content:
      'Trong Java, từ khóa `static` được sử dụng cho thành phần nào của lớp?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: 'Chỉ thuộc tính',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Chỉ phương thức',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Thuộc tính và phương thức',
        is_correct: true,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Chỉ lớp',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[] as Answer[] as Answer[],
  },
  {
    id: 112,
    content: 'Một lớp có thể implements bao nhiêu interface trong Java?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: 'Chỉ một',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Tối đa hai',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Không giới hạn',
        is_correct: true,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Tùy thuộc vào số lượng phương thức trong interface',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[] as Answer[] as Answer[],
  },
  {
    id: 113,
    content:
      'Từ khóa `final` khi áp dụng cho một `class` trong Java có mục đích gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Nó làm cho `class` trở thành `abstract`.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Nó ngăn `class` bị khởi tạo.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Nó ngăn `class` bị kế thừa (`extended`).',
        is_correct: true,
        order_index: 3,
      },
      {
        id: 4,
        content:
          'Nó làm cho tất cả các `method` trong `class` trở thành `final`.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[] as Answer[] as Answer[],
  },
  {
    id: 114,
    content:
      "Trong ngữ cảnh của Lập trình hướng đối tượng, 'instance' có nghĩa là gì?",
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: 'Một lớp cha',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Một thuộc tính của lớp',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Một đối tượng cụ thể của một lớp',
        is_correct: true,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Một phương thức tĩnh',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[] as Answer[] as Answer[],
  },
  {
    id: 115,
    content: '`Method overloading` trong Java là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Định nghĩa nhiều `method` cùng tên nhưng khác kiểu trả về trong cùng một `class`.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content:
          'Định nghĩa nhiều `method` khác tên nhưng cùng danh sách tham số trong cùng một `class`.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content:
          'Định nghĩa nhiều `method` cùng tên nhưng khác danh sách tham số (số lượng, kiểu, hoặc thứ tự) trong cùng một `class`.',
        is_correct: true,
        order_index: 3,
      },
      {
        id: 4,
        content:
          '`Overriding` một `method` trong một `subclass` với một tên khác.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[] as Answer[] as Answer[],
  },
  {
    id: 116,
    content:
      'Trong Java, từ khóa nào được sử dụng để tham chiếu đến đối tượng hiện tại?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: 'self',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content: 'me',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'this',
        is_correct: true,
        order_index: 3,
      },
      {
        id: 4,
        content: 'current',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[] as Answer[] as Answer[],
  },
  {
    id: 117,
    content: '`Method overriding` trong Java là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Định nghĩa một `method` trong một `subclass` có cùng tên và danh sách tham số với một `method` trong `superclass` của nó.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Định nghĩa nhiều `method` cùng tên trong cùng một `class`.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Gọi một `method` của `superclass` từ `subclass`.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Ẩn một `method` của `superclass` trong `subclass`.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[] as Answer[] as Answer[],
  },
  {
    id: 118,
    content:
      'Trong Java, access modifier `protected` cho phép truy cập từ đâu?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Chỉ từ bên trong lớp',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Từ bên trong lớp và các lớp con',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Từ bên trong lớp, các lớp con và các lớp trong cùng package',
        is_correct: true,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Từ bất kỳ lớp nào',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[] as Answer[] as Answer[],
  },
  {
    id: 119,
    content: 'Mục đích của toán tử `instanceof` trong Java là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Để tạo một `instance` mới của một `class`.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content:
          'Để kiểm tra xem một `object` có phải là một `instance` của một `class` hoặc `interface` cụ thể hay không.',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Để so sánh hai `instance` của cùng một `class`.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Để lấy `class` của một `object`.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[] as Answer[] as Answer[],
  },
  {
    id: 120,
    content:
      "Trong Java, khái niệm 'composition' trong OOP thể hiện mối quan hệ như thế nào giữa các lớp?",
    difficulty_level: 'hard',
    answers: [
      {
        id: 1,
        content: "Mối quan hệ 'là một loại' (is-a)",
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content:
          "Mối quan hệ 'có một' (has-a) mạnh mẽ, trong đó đối tượng chứa chịu trách nhiệm cho vòng đời của đối tượng được chứa",
        is_correct: true,
        order_index: 2,
      },
      {
        id: 3,
        content: "Mối quan hệ 'sử dụng' (uses-a)",
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Mối quan hệ kế thừa',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[] as Answer[] as Answer[],
  },
  {
    id: 121,
    content:
      "Trong Java, khái niệm 'aggregation' trong OOP khác với 'composition' như thế nào?",
    difficulty_level: 'hard',
    answers: [
      {
        id: 1,
        content: 'Aggregation là một dạng đặc biệt của composition.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content:
          "Aggregation thể hiện mối quan hệ 'có một' (has-a) yếu hơn, trong đó các đối tượng liên quan có thể tồn tại độc lập.",
        is_correct: true,
        order_index: 2,
      },
      {
        id: 3,
        content:
          "Composition thể hiện mối quan hệ 'là một loại' (is-a), còn aggregation là 'có một' (has-a).",
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content:
          'Không có sự khác biệt đáng kể giữa aggregation và composition.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[] as Answer[] as Answer[],
  },
  {
    id: 122,
    content: 'Lợi ích chính của việc sử dụng `interface` trong Java là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Cho phép đa kế thừa của `implementation`.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Để cung cấp `implementation` mặc định cho các `method`.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Để định nghĩa trạng thái của một `object`.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Để trực tiếp tạo `object`.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[] as Answer[] as Answer[],
  },
  {
    id: 123,
    content:
      'Trong Java, một lớp trừu tượng (abstract class) có thể chứa những thành phần nào?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Chỉ các phương thức trừu tượng.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Chỉ các phương thức không trừu tượng.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content:
          'Cả phương thức trừu tượng và phương thức không trừu tượng, cũng như thuộc tính.',
        is_correct: true,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Chỉ các hằng số.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[] as Answer[] as Answer[],
  },
  {
    id: 124,
    content:
      'Điều gì xảy ra nếu bạn khai báo một `method` là `final` trong Java?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: '`Method` không thể được truy cập từ bên ngoài `class`.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content: '`Method` không thể bị `override` bởi các `subclass`.',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 3,
        content: '`Method` phải được `override` bởi các `subclass`.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: '`Method` trở thành `static`.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[] as Answer[] as Answer[],
  },
  {
    id: 125,
    content: "Trong Lập trình hướng đối tượng, 'coupling' đề cập đến điều gì?",
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Mức độ liên kết hoặc phụ thuộc lẫn nhau giữa các lớp.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Số lượng đối tượng được tạo ra từ một lớp.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Tốc độ giao tiếp giữa các đối tượng.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Mức độ phức tạp của một lớp.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[] as Answer[] as Answer[],
  },
  {
    id: 126,
    content: 'Ý nghĩa của `cohesion` trong Lập trình hướng đối tượng là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Mức độ mà các `class` khác nhau phụ thuộc vào nhau.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content:
          'Mức độ mà các phần tử bên trong một `module` thuộc về nhau về mặt khái niệm.',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Số lượng trách nhiệm được gán cho một `class`.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Độ phức tạp của tương tác giữa các `object`.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[] as Answer[] as Answer[],
  },
  {
    id: 127,
    content:
      'Trong Java, từ khóa nào được sử dụng để khai báo một biến lớp (class variable)?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: 'public',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content: 'static',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 3,
        content: 'final',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'abstract',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[] as Answer[] as Answer[],
  },
  {
    id: 128,
    content: 'Mối quan hệ giữa một `object` và một `class` trong Java là gì?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: 'Một `class` là một `instance` của một `object`.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Một `object` là một bản thiết kế cho một `class`.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Một `object` là một `instance` của một `class`.',
        is_correct: true,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Một `class` và một `object` là cùng một thứ.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[] as Answer[] as Answer[],
  },
  {
    id: 129,
    content:
      'Trong Java, phương thức `toString()` thường được ghi đè (overridden) để làm gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Để so sánh hai đối tượng.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Để trả về một biểu diễn chuỗi có ý nghĩa của đối tượng.',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Để thực hiện các phép toán số học trên đối tượng.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Để giải phóng bộ nhớ của đối tượng.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[] as Answer[] as Answer[],
  },
  {
    id: 130,
    content:
      'Vai trò của `access modifiers` trong việc đạt được tính đóng gói (`encapsulation`) trong Java là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Chúng định nghĩa cách các `object` của các `class` khác nhau có thể được tạo.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content:
          'Chúng kiểm soát khả năng hiển thị và truy cập của các thành viên `class` (thuộc tính và `method`), do đó ẩn giấu các chi tiết `implementation` bên trong.',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Chúng xác định thứ tự thực hiện của các `method`.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Chúng chỉ định kiểu dữ liệu của các thành viên `class`.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[] as Answer[] as Answer[],
  },
  {
    id: 131,
    content:
      'Trong Java, `garbage collection` là gì và nó hoạt động như thế nào?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Một quá trình thu thập các lỗi cú pháp trong `code`.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content:
          'Một cơ chế tự động quản lý bộ nhớ, giải phóng bộ nhớ không còn được sử dụng bởi các `object`.',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 3,
        content:
          'Một kỹ thuật tối ưu hóa hiệu suất của chương trình bằng cách sắp xếp lại bộ nhớ.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content:
          'Một phần của trình biên dịch Java để kiểm tra tính tương thích của các thư viện.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 132,
    content:
      'Sự khác biệt chính giữa `String` và `StringBuilder` trong Java là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          '`String` có thể thay đổi nội dung, còn `StringBuilder` thì không.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content:
          '`String` là bất biến (`immutable`), còn `StringBuilder` là khả biến (`mutable`).',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 3,
        content:
          '`StringBuilder` được sử dụng cho các chuỗi ngắn, còn `String` cho các chuỗi dài.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content:
          'Không có sự khác biệt đáng kể giữa `String` và `StringBuilder`.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 133,
    content:
      'Trong Java, `exception handling` được thực hiện bằng cách sử dụng các khối lệnh nào?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: '`if-else`',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content: '`for`, `while`',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: '`try-catch-finally`',
        is_correct: true,
        order_index: 3,
      },
      {
        id: 4,
        content: '`switch-case`',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 134,
    content: 'Mục đích của từ khóa `transient` trong Java là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Đánh dấu một biến là hằng số.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Ngăn một biến được tuần tự hóa (`serialized`).',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Khai báo một biến là tĩnh (`static`).',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Cho phép truy cập biến từ bất kỳ đâu.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 135,
    content:
      'Trong Java, `interface` có thể chứa các `method` có phần thân (`body`) hay không? Nếu có, từ khóa nào được sử dụng?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Không thể.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Có, sử dụng từ khóa `implemented`.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Có, sử dụng từ khóa `default`.',
        is_correct: true,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Có, sử dụng từ khóa `static`.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 136,
    content: 'Vai trò của `method` `equals()` trong Java là gì?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content:
          'Để kiểm tra xem hai tham chiếu `object` có trỏ đến cùng một `object` trong bộ nhớ hay không.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Để so sánh nội dung của hai `object` về sự bằng nhau.',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Để gán giá trị của một `object` cho một `object` khác.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Để lấy `hash code` của một `object`.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 137,
    content:
      'Trong Java, `abstract method` có thể có phần thân (`body`) hay không?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: 'Có.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Không.',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Chỉ khi `class` chứa nó là `final`.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Tùy thuộc vào `access modifier`.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 138,
    content: 'Vai trò của `method` `hashCode()` trong Java là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Để so sánh nội dung của hai `object`.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content:
          'Để tạo một giá trị số nguyên duy nhất cho một `object`, được sử dụng bởi các `collection` dựa trên `hash` như `HashMap` và `HashSet`.',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Để lấy tên `class` của một `object`.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content:
          'Để kiểm tra xem hai tham chiếu `object` có trỏ đến cùng một vị trí bộ nhớ hay không.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 139,
    content:
      'Trong Java, sự khác biệt giữa `checked exception` và `unchecked exception` là gì?',
    difficulty_level: 'hard',
    answers: [
      {
        id: 1,
        content:
          '`Checked exception` xảy ra trong quá trình biên dịch, còn `unchecked exception` xảy ra trong thời gian chạy.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content:
          '`Unchecked exception` phải được xử lý bằng khối `try-catch`, còn `checked exception` thì không.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content:
          'Không có sự khác biệt giữa `checked exception` và `unchecked exception`.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content:
          '`Checked exception` là các lỗi nghiêm trọng, còn `unchecked exception` là các lỗi nhẹ.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 140,
    content: 'Mục đích của từ khóa `super()` trong Java là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Để tạo một `instance` mới của `superclass`.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content:
          'Để gọi `constructor` của `superclass` từ `constructor` của `subclass` hoặc để truy cập các thành viên của `superclass`.',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Để tham chiếu đến `instance` hiện tại của `subclass`.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Để khai báo một `method` trong `superclass` là `abstract`.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 141,
    content: 'Trong Java, `final` khi dùng với biến `instance` có ý nghĩa gì?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: 'Biến không thể thay đổi giá trị sau khởi tạo.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Biến có thể truy cập từ bất kỳ đâu.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Biến sẽ được chia sẻ giữa tất cả các `instance` của `class`.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Biến sẽ không được lưu trữ khi `object` được `serialized`.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 142,
    content:
      'Sự khác biệt giữa `throw` và `throws` trong `exception handling` của Java là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          '`throw` dùng để khai báo `exception` có thể được ném ra, `throws` dùng để ném một `instance exception`.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content:
          '`throw` dùng để ném một `instance exception` một cách tường minh, `throws` dùng để khai báo một `method` có thể ném ra một hoặc nhiều loại `exception`.',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Không có sự khác biệt giữa `throw` và `throws`.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Cả hai đều dùng để bắt `exception`.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 143,
    content: 'Trong Java, `nested class` là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Một `class` được định nghĩa bên ngoài một `class` khác.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Một `class` được định nghĩa bên trong một `class` khác.',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Một `class` kế thừa từ nhiều `class` khác.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Một `class` không có `instance`.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 144,
    content:
      'Sự khác biệt giữa `static nested class` và `inner class` (non-static `nested class`) trong Java là gì?',
    difficulty_level: 'hard',
    answers: [
      {
        id: 1,
        content:
          '`static nested class` có thể truy cập trực tiếp các thành viên non-static của `outer class`, còn `inner class` thì không.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content:
          '`inner class` được gắn liền với một `instance` của `outer class` và có thể truy cập trực tiếp các thành viên non-static của `outer class`, còn `static nested class` thì không cần `instance` của `outer class` và chỉ có thể truy cập các thành viên `static` của `outer class`.',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Không có sự khác biệt đáng kể giữa chúng.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content:
          'Cả hai đều phải được khởi tạo thông qua `instance` của `outer class`.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 145,
    content: 'Trong Java, `anonymous inner class` là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Một `inner class` có tên rõ ràng.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content:
          'Một `inner class` không có tên và được khai báo đồng thời với việc khởi tạo `instance` của nó.',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Một `static nested class`.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Một `class` được định nghĩa bên ngoài bất kỳ `class` nào.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 146,
    content: 'Mục đích của từ khóa `volatile` trong Java là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Để làm cho một biến là hằng số.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content:
          'Để đảm bảo rằng các thay đổi đối với một biến được hiển thị ngay lập tức cho các `thread` khác.',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Để ngăn một `method` bị `override`.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Để chỉ ra rằng một `method` có thể ném ra `exception`.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 147,
    content:
      'Trong Java, `synchronization` được sử dụng để giải quyết vấn đề gì trong lập trình đa luồng?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Ngăn chặn việc tạo mới `thread`.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content:
          'Ngăn chặn tình trạng đua (`race condition`) khi nhiều `thread` truy cập và sửa đổi cùng một tài nguyên chia sẻ.',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Tăng tốc độ thực thi của chương trình đa luồng.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Quản lý bộ nhớ cho các `thread`.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 148,
    content: '`Lambda expression` trong Java là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Một cách để định nghĩa các `anonymous class`.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content:
          'Một cách ngắn gọn để biểu diễn một hàm (`method`) vô danh có thể được truyền đi.',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Một cơ chế để xử lý `exception`.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Một tính năng để tạo các `immutable object`.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 149,
    content: 'Trong Java, `functional interface` là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Một `interface` không có `method` nào.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Một `interface` chứa đúng một `abstract method`.',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Một `interface` chứa tất cả các `method` là `static`.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Một `interface` được sử dụng để tạo các `object` hàm.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 150,
    content: '`Generics` trong Java là gì và vấn đề nào nó giải quyết?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Một cách để định nghĩa biến mà không cần chỉ định kiểu dữ liệu, giải quyết các vấn đề về cấp phát bộ nhớ.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content:
          'Một tính năng cho phép bạn tham số hóa kiểu dữ liệu, cung cấp tính an toàn kiểu tại thời điểm biên dịch và giảm nhu cầu ép kiểu.',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Một cơ chế để xử lý lỗi thời gian chạy.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content:
          'Một tập hợp các `interface` được định nghĩa trước cho các tác vụ lập trình phổ biến.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
];

const questionData4: Partial<Question>[] = [
  {
    id: 151,
    content: '`Database` là gì?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: 'Một tập hợp dữ liệu có cấu trúc.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Một ngôn ngữ lập trình.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Một phần mềm ứng dụng.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Một giao diện người dùng.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 152,
    content: '`DBMS` là viết tắt của cụm từ nào?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: '`Data Base Management System`.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: '`Database Manipulation Software`.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: '`Digital Binary Management System`.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: '`Distributed Business Management System`.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 153,
    content: '`SQL` là gì?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: 'Một hệ quản trị cơ sở dữ liệu.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Một ngôn ngữ truy vấn có cấu trúc.',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Một loại cơ sở dữ liệu.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Một công cụ thiết kế cơ sở dữ liệu.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 154,
    content: 'Trong `database`, `primary key` dùng để làm gì?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: 'Liên kết giữa các bảng.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Xác định duy nhất mỗi bản ghi trong một bảng.',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Sắp xếp dữ liệu trong bảng.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Lọc dữ liệu trong bảng.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 155,
    content: 'Trong `database`, `foreign key` dùng để làm gì?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: 'Xác định duy nhất mỗi bản ghi trong một bảng.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Tạo mối quan hệ giữa các bảng.',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Đảm bảo tính toàn vẹn của dữ liệu trong một bảng.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Tăng tốc độ truy vấn dữ liệu.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 156,
    content: 'Mệnh đề `SELECT` trong `SQL` được dùng để làm gì?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: 'Thêm dữ liệu vào bảng.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Xóa dữ liệu khỏi bảng.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Lấy dữ liệu từ một hoặc nhiều bảng.',
        is_correct: true,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Cập nhật dữ liệu trong bảng.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 157,
    content: 'Mệnh đề `WHERE` trong `SQL` được dùng để làm gì?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: 'Sắp xếp dữ liệu.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Nhóm dữ liệu.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Lọc các bản ghi dựa trên một điều kiện cụ thể.',
        is_correct: true,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Chọn tất cả các bản ghi.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 158,
    content: 'Mệnh đề `JOIN` trong `SQL` được dùng để làm gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Lọc dữ liệu từ một bảng.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content:
          'Kết hợp các bản ghi từ hai hoặc nhiều bảng dựa trên một cột liên quan.',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Sắp xếp dữ liệu từ nhiều bảng.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Nhóm dữ liệu từ nhiều bảng.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 159,
    content: '`Normalization` trong `database` là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Quá trình thêm dữ liệu trùng lặp vào bảng để tăng tốc độ truy vấn.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content:
          'Quá trình tổ chức dữ liệu trong `database` để giảm thiểu sự dư thừa và cải thiện tính toàn vẹn dữ liệu.',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 3,
        content:
          'Quá trình mã hóa dữ liệu trong `database` để bảo mật thông tin.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Quá trình sao lưu dữ liệu trong `database`.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 160,
    content:
      'Các dạng chuẩn (normal forms) phổ biến trong `database` bao gồm những dạng nào?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: '1NF, 2NF.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content: '1NF, 2NF, 3NF.',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 3,
        content: '1NF, 2NF, 3NF, 4NF.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Chỉ có 1NF.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 161,
    content:
      '`ACID` trong ngữ cảnh `database transaction` là viết tắt của những thuộc tính nào?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: '`Atomicity`, `Consistency`, `Isolation`, `Durability`.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: '`Accuracy`, `Completeness`, `Integrity`, `Dependability`.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: '`Availability`, `Consistency`, `Integrity`, `Durability`.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: '`Atomicity`, `Concurrency`, `Isolation`, `Distribution`.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 162,
    content: 'Trong `database`, `index` được sử dụng để làm gì?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: 'Lưu trữ dữ liệu.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Tăng tốc độ truy vấn dữ liệu.',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Đảm bảo tính toàn vẹn của dữ liệu.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Định nghĩa cấu trúc của bảng.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 163,
    content:
      'Các loại `relationship` phổ biến giữa các bảng trong `database` là gì?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: 'Một-nhiều.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Một-một, nhiều-nhiều.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Một-một, một-nhiều, nhiều-nhiều.',
        is_correct: true,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Chỉ một-một.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 164,
    content: '`Data integrity` trong `database` là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Khả năng truy cập dữ liệu nhanh chóng.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Tính chính xác, nhất quán và đáng tin cậy của dữ liệu.',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Khả năng lưu trữ lượng lớn dữ liệu.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Khả năng bảo mật dữ liệu khỏi truy cập trái phép.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 165,
    content: 'Trong `SQL`, mệnh đề `GROUP BY` được dùng để làm gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Sắp xếp các bản ghi.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Lọc các bản ghi.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content:
          'Nhóm các bản ghi có cùng giá trị trong một hoặc nhiều cột thành một bản tóm tắt.',
        is_correct: true,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Kết hợp các bản ghi từ các bảng khác nhau.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 166,
    content:
      'Trong `SQL`, hàm tổng hợp (`aggregate function`) `COUNT()` dùng để làm gì?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: 'Tính tổng các giá trị.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Tìm giá trị lớn nhất.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Đếm số lượng bản ghi thỏa mãn điều kiện.',
        is_correct: true,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Tính giá trị trung bình.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 167,
    content: '`Data warehouse` là gì?',
    difficulty_level: 'hard',
    answers: [
      {
        id: 1,
        content: 'Một hệ thống quản lý cơ sở dữ liệu giao dịch.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content:
          'Một hệ thống được thiết kế để hỗ trợ các quyết định kinh doanh bằng cách cung cấp một cái nhìn tổng hợp và lịch sử của dữ liệu.',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 3,
        content:
          'Một loại cơ sở dữ liệu được tối ưu hóa cho việc lưu trữ dữ liệu phi cấu trúc.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content:
          'Một công cụ để thiết kế giao diện người dùng cho các ứng dụng cơ sở dữ liệu.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 168,
    content: '`Data mining` là gì?',
    difficulty_level: 'hard',
    answers: [
      {
        id: 1,
        content: 'Quá trình nhập dữ liệu lớn vào cơ sở dữ liệu.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content:
          'Quá trình khám phá các mẫu, xu hướng và thông tin hữu ích từ lượng lớn dữ liệu.',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Quá trình làm sạch dữ liệu bị lỗi hoặc không nhất quán.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Quá trình thiết kế cấu trúc cơ sở dữ liệu.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 169,
    content: '`NoSQL` là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Một hệ quản trị cơ sở dữ liệu quan hệ truyền thống.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content:
          'Một loại cơ sở dữ liệu không sử dụng mô hình quan hệ, thường được sử dụng cho dữ liệu lớn và phi cấu trúc.',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Một ngôn ngữ truy vấn cơ sở dữ liệu mới.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Một công cụ để quản lý các cơ sở dữ liệu quan hệ.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 170,
    content: 'Các loại cơ sở dữ liệu `NoSQL` phổ biến bao gồm những loại nào?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: '`MySQL`, `PostgreSQL`.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content: '`MongoDB`, `Cassandra`, `Redis`, `Neo4j`.',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 3,
        content: '`Oracle`, `SQL Server`.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: '`SQLite`.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 171,
    content:
      '`Data definition language` (`DDL`) trong `SQL` được dùng để làm gì?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: 'Truy vấn dữ liệu.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content:
          'Định nghĩa cấu trúc của cơ sở dữ liệu và các đối tượng của nó (bảng, chỉ mục, v.v.).',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Thao tác dữ liệu.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Kiểm soát quyền truy cập dữ liệu.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 172,
    content:
      '`Data manipulation language` (`DML`) trong `SQL` được dùng để làm gì?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: 'Định nghĩa cấu trúc cơ sở dữ liệu.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Thao tác dữ liệu (thêm, sửa, xóa).',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Truy vấn dữ liệu.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Kiểm soát giao dịch.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 173,
    content: '`Data control language` (`DCL`) trong `SQL` được dùng để làm gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Định nghĩa cấu trúc bảng.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Thao tác dữ liệu trong bảng.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content:
          'Kiểm soát quyền truy cập vào dữ liệu và các đối tượng cơ sở dữ liệu.',
        is_correct: true,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Truy vấn dữ liệu từ bảng.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 174,
    content: 'Mệnh đề `HAVING` trong `SQL` khác với `WHERE` như thế nào?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          '`WHERE` được sử dụng với các hàm tổng hợp, còn `HAVING` thì không.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content:
          '`WHERE` lọc các bản ghi trước khi nhóm, còn `HAVING` lọc các nhóm sau khi đã được tạo bởi `GROUP BY`.',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Không có sự khác biệt giữa `WHERE` và `HAVING`.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content:
          '`HAVING` được sử dụng để sắp xếp dữ liệu, còn `WHERE` thì không.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 175,
    content: '`Stored procedure` trong `database` là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Một hàm tích hợp sẵn trong `SQL`.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content:
          'Một tập hợp các câu lệnh `SQL` được lưu trữ trong cơ sở dữ liệu và có thể được thực thi nhiều lần.',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Một công cụ để thiết kế giao diện cơ sở dữ liệu.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Một loại ràng buộc dữ liệu.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 151,
    content: '`Database` là gì?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: 'Một tập hợp dữ liệu có cấu trúc.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Một ngôn ngữ lập trình.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Một phần mềm ứng dụng.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Một giao diện người dùng.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 152,
    content: '`DBMS` là viết tắt của cụm từ nào?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: '`Data Base Management System`.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: '`Database Manipulation Software`.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: '`Digital Binary Management System`.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: '`Distributed Business Management System`.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 153,
    content: '`SQL` là gì?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: 'Một hệ quản trị cơ sở dữ liệu.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Một ngôn ngữ truy vấn có cấu trúc.',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Một loại cơ sở dữ liệu.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Một công cụ thiết kế cơ sở dữ liệu.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 154,
    content: 'Trong `database`, `primary key` dùng để làm gì?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: 'Liên kết giữa các bảng.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Xác định duy nhất mỗi bản ghi trong một bảng.',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Sắp xếp dữ liệu trong bảng.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Lọc dữ liệu trong bảng.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 155,
    content: 'Trong `database`, `foreign key` dùng để làm gì?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: 'Xác định duy nhất mỗi bản ghi trong một bảng.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Tạo mối quan hệ giữa các bảng.',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Đảm bảo tính toàn vẹn của dữ liệu trong một bảng.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Tăng tốc độ truy vấn dữ liệu.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 156,
    content: 'Mệnh đề `SELECT` trong `SQL` được dùng để làm gì?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: 'Thêm dữ liệu vào bảng.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Xóa dữ liệu khỏi bảng.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Lấy dữ liệu từ một hoặc nhiều bảng.',
        is_correct: true,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Cập nhật dữ liệu trong bảng.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 157,
    content: 'Mệnh đề `WHERE` trong `SQL` được dùng để làm gì?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: 'Sắp xếp dữ liệu.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Nhóm dữ liệu.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Lọc các bản ghi dựa trên một điều kiện cụ thể.',
        is_correct: true,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Chọn tất cả các bản ghi.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 158,
    content: 'Mệnh đề `JOIN` trong `SQL` được dùng để làm gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Lọc dữ liệu từ một bảng.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content:
          'Kết hợp các bản ghi từ hai hoặc nhiều bảng dựa trên một cột liên quan.',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Sắp xếp dữ liệu từ nhiều bảng.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Nhóm dữ liệu từ nhiều bảng.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 159,
    content: '`Normalization` trong `database` là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Quá trình thêm dữ liệu trùng lặp vào bảng để tăng tốc độ truy vấn.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content:
          'Quá trình tổ chức dữ liệu trong `database` để giảm thiểu sự dư thừa và cải thiện tính toàn vẹn dữ liệu.',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 3,
        content:
          'Quá trình mã hóa dữ liệu trong `database` để bảo mật thông tin.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Quá trình sao lưu dữ liệu trong `database`.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 160,
    content:
      'Các dạng chuẩn (normal forms) phổ biến trong `database` bao gồm những dạng nào?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: '1NF, 2NF.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content: '1NF, 2NF, 3NF.',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 3,
        content: '1NF, 2NF, 3NF, 4NF.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Chỉ có 1NF.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 161,
    content:
      '`ACID` trong ngữ cảnh `database transaction` là viết tắt của những thuộc tính nào?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: '`Atomicity`, `Consistency`, `Isolation`, `Durability`.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: '`Accuracy`, `Completeness`, `Integrity`, `Dependability`.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: '`Availability`, `Consistency`, `Integrity`, `Durability`.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: '`Atomicity`, `Concurrency`, `Isolation`, `Distribution`.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 162,
    content: 'Trong `database`, `index` được sử dụng để làm gì?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: 'Lưu trữ dữ liệu.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Tăng tốc độ truy vấn dữ liệu.',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Đảm bảo tính toàn vẹn của dữ liệu.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Định nghĩa cấu trúc của bảng.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 163,
    content:
      'Các loại `relationship` phổ biến giữa các bảng trong `database` là gì?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: 'Một-nhiều.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Một-một, nhiều-nhiều.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Một-một, một-nhiều, nhiều-nhiều.',
        is_correct: true,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Chỉ một-một.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 164,
    content: '`Data integrity` trong `database` là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Khả năng truy cập dữ liệu nhanh chóng.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Tính chính xác, nhất quán và đáng tin cậy của dữ liệu.',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Khả năng lưu trữ lượng lớn dữ liệu.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Khả năng bảo mật dữ liệu khỏi truy cập trái phép.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 165,
    content: 'Trong `SQL`, mệnh đề `GROUP BY` được dùng để làm gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Sắp xếp các bản ghi.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Lọc các bản ghi.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content:
          'Nhóm các bản ghi có cùng giá trị trong một hoặc nhiều cột thành một bản tóm tắt.',
        is_correct: true,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Kết hợp các bản ghi từ các bảng khác nhau.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 166,
    content:
      'Trong `SQL`, hàm tổng hợp (`aggregate function`) `COUNT()` dùng để làm gì?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: 'Tính tổng các giá trị.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Tìm giá trị lớn nhất.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Đếm số lượng bản ghi thỏa mãn điều kiện.',
        is_correct: true,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Tính giá trị trung bình.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 167,
    content: '`Data warehouse` là gì?',
    difficulty_level: 'hard',
    answers: [
      {
        id: 1,
        content: 'Một hệ thống quản lý cơ sở dữ liệu giao dịch.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content:
          'Một hệ thống được thiết kế để hỗ trợ các quyết định kinh doanh bằng cách cung cấp một cái nhìn tổng hợp và lịch sử của dữ liệu.',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 3,
        content:
          'Một phương pháp để phát hiện và ngăn chặn deadlock trong cơ sở dữ liệu.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Một kỹ thuật để tăng cường tính bảo mật của dữ liệu.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 168,
    content: '`Data mining` là gì?',
    difficulty_level: 'hard',
    answers: [
      {
        id: 1,
        content: 'Quá trình nhập dữ liệu lớn vào `database`.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content:
          'Quá trình khám phá các mẫu, xu hướng và thông tin hữu ích từ lượng lớn dữ liệu.',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Quá trình làm sạch dữ liệu bị lỗi hoặc không nhất quán.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Quá trình thiết kế cấu trúc `database`.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 169,
    content: '`NoSQL` là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Một hệ quản trị cơ sở dữ liệu quan hệ truyền thống.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content:
          'Một loại cơ sở dữ liệu không sử dụng mô hình quan hệ, thường được sử dụng cho dữ liệu lớn và phi cấu trúc.',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Một ngôn ngữ truy vấn cơ sở dữ liệu mới.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Một công cụ để quản lý các cơ sở dữ liệu quan hệ.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 170,
    content: 'Các loại cơ sở dữ liệu `NoSQL` phổ biến bao gồm những loại nào?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: '`MySQL`, `PostgreSQL`.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content: '`MongoDB`, `Cassandra`, `Redis`, `Neo4j`.',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 3,
        content: '`Oracle`, `SQL Server`.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: '`SQLite`.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 171,
    content:
      '`Data definition language` (`DDL`) trong `SQL` được dùng để làm gì?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: 'Truy vấn dữ liệu.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content:
          'Định nghĩa cấu trúc của cơ sở dữ liệu và các đối tượng của nó (`table`, `index`, v.v.).',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Thao tác dữ liệu.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Kiểm soát quyền truy cập dữ liệu.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 172,
    content:
      '`Data manipulation language` (`DML`) trong `SQL` được dùng để làm gì?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: 'Định nghĩa cấu trúc cơ sở dữ liệu.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Thao tác dữ liệu (thêm, sửa, xóa).',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Truy vấn dữ liệu.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Kiểm soát giao dịch.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 173,
    content: '`Data control language` (`DCL`) trong `SQL` được dùng để làm gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Định nghĩa cấu trúc `table`.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Thao tác dữ liệu trong `table`.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content:
          'Kiểm soát quyền truy cập vào dữ liệu và các đối tượng cơ sở dữ liệu.',
        is_correct: true,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Truy vấn dữ liệu từ `table`.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 174,
    content: 'Mệnh đề `HAVING` trong `SQL` khác với `WHERE` như thế nào?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          '`WHERE` được sử dụng với các hàm tổng hợp, còn `HAVING` thì không.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content:
          '`WHERE` lọc các bản ghi trước khi nhóm, còn `HAVING` lọc các nhóm sau khi đã được tạo bởi `GROUP BY`.',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Không có sự khác biệt giữa `WHERE` và `HAVING`.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content:
          '`HAVING` được sử dụng để sắp xếp dữ liệu, còn `WHERE` thì không.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 175,
    content: '`Stored procedure` trong `database` là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Một hàm tích hợp sẵn trong `SQL`.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content:
          'Một tập hợp các câu lệnh `SQL` được lưu trữ trong cơ sở dữ liệu và có thể được thực thi nhiều lần.',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Một công cụ để thiết kế giao diện cơ sở dữ liệu.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Một loại ràng buộc dữ liệu.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 176,
    content: '`Trigger` trong `database` là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Một loại khóa chính đặc biệt.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content:
          'Một đoạn mã `SQL` tự động thực thi khi có một sự kiện cụ thể xảy ra trên `table` (ví dụ: `INSERT`, `UPDATE`, `DELETE`).',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Một công cụ để tối ưu hóa hiệu suất truy vấn.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Một cách để định nghĩa mối quan hệ giữa các `table`.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 177,
    content: '`View` trong `database` là gì?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: 'Một `table` ảo dựa trên kết quả của một câu lệnh `SQL`.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Một bản sao vật lý của một `table`.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Một công cụ để quản lý quyền truy cập dữ liệu.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Một phương pháp để mã hóa dữ liệu.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 178,
    content: 'Trong `SQL`, mệnh đề `ORDER BY` được dùng để làm gì?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: 'Lọc các bản ghi.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Nhóm các bản ghi.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Sắp xếp các bản ghi theo một hoặc nhiều cột.',
        is_correct: true,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Chọn các cột cụ thể.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 179,
    content:
      'Trong `SQL`, mệnh đề `LIMIT` (hoặc `TOP` trong một số hệ quản trị) được dùng để làm gì?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: 'Sắp xếp các bản ghi theo thứ tự ngược lại.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Giới hạn số lượng bản ghi được trả về bởi một truy vấn.',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Lọc các bản ghi dựa trên một điều kiện.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Nhóm các bản ghi lại với nhau.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 180,
    content: 'Trong `SQL`, hàm `NULL` được sử dụng để biểu thị điều gì?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: 'Giá trị bằng 0.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Một chuỗi rỗng.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Một giá trị bị thiếu hoặc không xác định.',
        is_correct: true,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Một giá trị mặc định.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 181,
    content: 'Trong `SQL`, toán tử `LIKE` được sử dụng để làm gì?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: 'So sánh bằng nhau chính xác.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Tìm kiếm các bản ghi khớp với một mẫu cụ thể.',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 3,
        content: 'So sánh lớn hơn hoặc bằng.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Kết hợp các `table`.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 182,
    content: 'Trong `SQL`, toán tử `IN` được sử dụng để làm gì?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: 'Kiểm tra xem một giá trị có nằm trong một phạm vi hay không.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content:
          'Kiểm tra xem một giá trị có khớp với bất kỳ giá trị nào trong một danh sách hay không.',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Kiểm tra xem một giá trị có phải là `NULL` hay không.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Kết hợp các table dựa trên các giá trị trùng khớp.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 183,
    content:
      'Trong một hệ thống cơ sở dữ liệu phân tán sử dụng giao thức commit hai pha (two-phase commit - 2PC), điều gì xảy ra và làm thế nào hệ thống phục hồi nếu bộ điều phối (coordinator) bị lỗi *sau khi* nó đã gửi yêu cầu PREPARE cho tất cả các bên tham gia (participants) nhưng *trước khi* nhận được phản hồi cuối cùng?',
    difficulty_level: 'hard',
    answers: [
      {
        id: 1,
        content: '',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content: '',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: '',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: '',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 184,
    content:
      'Hãy mô tả chi tiết các thách thức và giải pháp tiềm năng khi thực hiện việc tích hợp dữ liệu từ nhiều nguồn khác nhau có cấu trúc và ngữ nghĩa không đồng nhất vào một kho dữ liệu (data warehouse) duy nhất.',
    difficulty_level: 'hard',
    answers: [
      {
        id: 1,
        content: '',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content: '',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: '',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: '',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 185,
    content:
      'Giả sử bạn có một bảng dữ liệu giao dịch khổng lồ với hàng tỷ bản ghi. Làm thế nào bạn sẽ thiết kế một lược đồ phân vùng (partitioning scheme) hiệu quả để tối ưu hóa hiệu suất truy vấn cho các truy vấn thường xuyên lọc theo cột ngày tháng và một cột danh mục sản phẩm có tính đa dạng cao? Hãy giải thích các yếu tố bạn cân nhắc.',
    difficulty_level: 'hard',
    answers: [
      {
        id: 1,
        content: '',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content: '',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: '',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: '',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 186,
    content:
      'Trong ngữ cảnh của cơ sở dữ liệu NoSQL, hãy so sánh và đối chiếu các trade-off chính giữa tính nhất quán mạnh (strong consistency) và tính nhất quán cuối cùng (eventual consistency) trong các hệ thống phân tán. Khi nào thì việc ưu tiên tính nhất quán cuối cùng là một lựa chọn hợp lý?',
    difficulty_level: 'hard',
    answers: [
      {
        id: 1,
        content: '',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content: '',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: '',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: '',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 187,
    content:
      'Giải thích cặn kẽ về khái niệm "semantic gap" trong ngữ cảnh của mô hình hóa dữ liệu. Làm thế nào các kỹ thuật mô hình hóa dữ liệu nâng cao như ontology hoặc semantic web technologies có thể giúp thu hẹp khoảng cách này?',
    difficulty_level: 'hard',
    answers: [
      {
        id: 1,
        content: '',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content: '',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: '',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: '',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 188,
    content:
      'Xem xét một hệ thống cơ sở dữ liệu giao dịch trực tuyến (OLTP) có yêu cầu về độ trễ cực thấp và tính sẵn sàng cao. Hãy đề xuất một kiến trúc cơ sở dữ liệu có thể đáp ứng các yêu cầu này, bao gồm các kỹ thuật như replication, sharding và caching, đồng thời giải thích cách chúng phối hợp với nhau.',
    difficulty_level: 'hard',
    answers: [
      {
        id: 1,
        content: '',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content: '',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: '',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: '',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 189,
    content:
      'Trong lĩnh vực bảo mật cơ sở dữ liệu, hãy thảo luận về các phương pháp khác nhau để bảo vệ dữ liệu nhạy cảm (ví dụ: thông tin cá nhân) khi nó được lưu trữ và truyền đi. So sánh các ưu điểm và nhược điểm của các kỹ thuật như mã hóa (encryption) ở trạng thái nghỉ (at-rest) và đang di chuyển (in-transit), tokenization và masking.',
    difficulty_level: 'hard',
    answers: [
      {
        id: 1,
        content: '',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content: '',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: '',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: '',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 190,
    content:
      'Hãy mô tả chi tiết quy trình tối ưu hóa một truy vấn SQL phức tạp bao gồm nhiều bảng, phép nối (JOIN) và điều kiện lọc. Các bước bạn sẽ thực hiện để xác định nút thắt hiệu suất và các kỹ thuật bạn có thể sử dụng để cải thiện thời gian thực thi là gì?',
    difficulty_level: 'hard',
    answers: [
      {
        id: 1,
        content: '',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content: '',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: '',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: '',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 191,
    content:
      'Xét một hệ thống quản lý cơ sở dữ liệu phân tán (Distributed Database Management System - DDBMS) với kiến trúc chia sẻ dữ liệu (shared-data architecture) bao gồm nhiều nút xử lý và một kho lưu trữ dữ liệu tập trung. Giả sử bạn cần thực hiện một truy vấn phức tạp bao gồm nhiều phép nối (join) giữa các bảng lớn được phân mảnh theo chiều ngang (horizontal fragmentation) trên các nút khác nhau. Hãy mô tả chi tiết các bước mà DDBMS sẽ thực hiện để tối ưu hóa và thực thi truy vấn này, bao gồm cả việc xem xét các chiến lược truyền dữ liệu giữa các nút và cách giải quyết vấn đề về tính nhất quán dữ liệu (data consistency) trong quá trình thực thi truy vấn.',
    difficulty_level: 'hard',
    answers: [
      {
        id: 1,
        content:
          'Mô tả chi tiết các bước tối ưu hóa truy vấn phân tán, bao gồm phân tích truy vấn toàn cục, phân rã thành các truy vấn cục bộ, lập kế hoạch truy vấn cục bộ và toàn cục, lựa chọn chiến lược truyền dữ liệu (ví dụ: semi-join, bloom filter), và cách xử lý các phép nối phân tán.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content:
          'Chỉ tập trung vào việc liệt kê các loại phép nối phân tán (ví dụ: local join, partitioned join, general join) mà không giải thích quy trình tối ưu hóa.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content:
          'Giải thích về các giao thức đảm bảo tính nhất quán dữ liệu (ví dụ: two-phase commit) nhưng bỏ qua các khía cạnh về tối ưu hóa truy vấn.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content:
          'Mô tả kiến trúc shared-nothing thay vì shared-data và cách nó xử lý truy vấn phân tán.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 192,
    content: '`Data replication` là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Quá trình nén dữ liệu để tiết kiệm không gian lưu trữ.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content:
          'Quá trình sao chép dữ liệu từ một cơ sở dữ liệu sang một hoặc nhiều cơ sở dữ liệu khác.',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Quá trình phân tích dữ liệu để tìm ra các mẫu.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Quá trình chuyển đổi dữ liệu giữa các định dạng khác nhau.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 193,
    content: '`Data partitioning` là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Quá trình sắp xếp dữ liệu theo thứ tự bảng chữ cái.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content:
          'Quá trình chia một bảng lớn thành các phần nhỏ hơn, độc lập hơn.',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Quá trình mã hóa dữ liệu để bảo mật.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Quá trình tạo các bản sao lưu của dữ liệu.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 194,
    content: '`Database sharding` là gì?',
    difficulty_level: 'hard',
    answers: [
      {
        id: 1,
        content: 'Một kỹ thuật để tối ưu hóa các truy vấn phức tạp.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content:
          'Một loại phân vùng cơ sở dữ liệu theo chiều ngang, trong đó các hàng của một bảng được phân phối trên nhiều máy chủ.',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 3,
        content:
          'Một phương pháp để đảm bảo tính toàn vẹn dữ liệu trên nhiều cơ sở dữ liệu.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content:
          'Một cách để quản lý quyền truy cập vào các phần khác nhau của cơ sở dữ liệu.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 195,
    content: '`Database clustering` là gì?',
    difficulty_level: 'hard',
    answers: [
      {
        id: 1,
        content: 'Một phương pháp để nhóm các bảng có liên quan với nhau.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content:
          'Một kiến trúc trong đó nhiều máy chủ hoạt động cùng nhau để cung cấp khả năng chịu lỗi và khả năng mở rộng cho cơ sở dữ liệu.',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 3,
        content:
          'Một kỹ thuật để cải thiện hiệu suất của các hoạt động ghi dữ liệu.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Một cách để giám sát hiệu suất của cơ sở dữ liệu.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 196,
    content:
      '`ETL` là viết tắt của cụm từ nào trong ngữ cảnh `data warehousing`?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: '`Extract`, `Transform`, `Load`.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: '`Execute`, `Test`, `Log`.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: '`Encrypt`, `Translate`, `Link`.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: '`Evaluate`, `Track`, `Analyze`.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 197,
    content: '`OLTP` là viết tắt của cụm từ nào?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: '`Online Transaction Processing`.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: '`Online Analytical Processing`.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: '`Object Linking and Processing`.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: '`Operational Language Transaction Protocol`.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 198,
    content: '`OLAP` là viết tắt của cụm từ nào?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: '`Online Transaction Processing`.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content: '`Online Analytical Processing`.',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 3,
        content: '`Object Linking and Processing`.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: '`Operational Language Analytical Protocol`.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 199,
    content: '`Data lake` là gì?',
    difficulty_level: 'hard',
    answers: [
      {
        id: 1,
        content: 'Một kho lưu trữ dữ liệu quan hệ truyền thống.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content:
          'Một kho lưu trữ dữ liệu trung tâm, cho phép bạn lưu trữ dữ liệu có cấu trúc, bán cấu trúc và phi cấu trúc ở bất kỳ quy mô nào.',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 3,
        content:
          'Một hệ thống quản lý cơ sở dữ liệu được tối ưu hóa cho các giao dịch trực tuyến.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Một công cụ để trực quan hóa dữ liệu.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 200,
    content: 'Database administrator (DBA) có vai trò gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Phát triển ứng dụng tương tác với cơ sở dữ liệu.',
        is_correct: false,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Quản lý, duy trì và bảo mật cơ sở dữ liệu.',
        is_correct: true,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Phân tích dữ liệu để đưa ra quyết định kinh doanh.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content:
          'Thiết kế giao diện người dùng cho các ứng dụng cơ sở dữ liệu.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
];

const questionData5: Partial<Question>[] = [
  {
    id: 351,
    content: 'Mục tiêu chính của giai đoạn phân tích hệ thống thông tin là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Hiểu rõ vấn đề nghiệp vụ và xác định các yêu cầu của hệ thống mới.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Xây dựng mô hình dữ liệu cho hệ thống.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Thiết kế giao diện người dùng cho hệ thống.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Viết mã chương trình cho hệ thống.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 352,
    content:
      'Các kỹ thuật thu thập yêu cầu phổ biến trong phân tích hệ thống thông tin bao gồm:',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Phỏng vấn, khảo sát, quan sát, phân tích tài liệu, brainstorming.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Lập trình cặp, kiểm thử đơn vị, tái cấu trúc mã.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Phân tích SWOT, mô hình 5 lực lượng Porter, chuỗi giá trị.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'UML, ERD, DFD.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 353,
    content:
      'Phân tích SWOT thường được sử dụng trong giai đoạn nào của phân tích hệ thống thông tin?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Phân tích nghiệp vụ và xác định cơ hội/thách thức.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Thu thập yêu cầu người dùng.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Mô hình hóa quy trình nghiệp vụ.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Đánh giá các giải pháp tiềm năng.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 354,
    content:
      'Biểu đồ luồng dữ liệu (Data Flow Diagram - DFD) được sử dụng để mô hình hóa điều gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Luồng di chuyển của dữ liệu qua hệ thống và các xử lý liên quan.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Cấu trúc dữ liệu và mối quan hệ giữa các thực thể.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Các tương tác giữa người dùng và hệ thống theo thời gian.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Cấu trúc tĩnh của các thành phần trong hệ thống.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 355,
    content:
      'Biểu đồ quan hệ thực thể (Entity-Relationship Diagram - ERD) được sử dụng để mô hình hóa điều gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Cấu trúc dữ liệu và mối quan hệ giữa các thực thể trong hệ thống.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Luồng di chuyển của dữ liệu qua hệ thống.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Các quy trình nghiệp vụ trong hệ thống.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Giao diện người dùng của hệ thống.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 356,
    content: 'Mục tiêu chính của giai đoạn thiết kế hệ thống thông tin là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Xây dựng một bản thiết kế chi tiết cho hệ thống mới dựa trên các yêu cầu đã xác định.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Thu thập thông tin từ người dùng về nhu cầu của họ.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Kiểm thử chức năng của hệ thống đã được xây dựng.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Triển khai hệ thống vào môi trường làm việc thực tế.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 357,
    content:
      'Thiết kế kiến trúc hệ thống thông tin bao gồm những khía cạnh nào?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Lựa chọn mô hình kiến trúc (ví dụ: client-server, microservices), xác định các thành phần và mối quan hệ giữa chúng.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Thiết kế giao diện người dùng và trải nghiệm người dùng.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Xây dựng mô hình dữ liệu logic và vật lý.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Lựa chọn ngôn ngữ lập trình và công nghệ phát triển.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 358,
    content:
      'Thiết kế giao diện người dùng (User Interface - UI) tập trung vào điều gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Cách người dùng tương tác với hệ thống, đảm bảo tính trực quan, dễ sử dụng và hiệu quả.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Cách dữ liệu được lưu trữ và quản lý trong hệ thống.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Cấu trúc bên trong và các thành phần của hệ thống.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Hiệu suất và khả năng mở rộng của hệ thống.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 359,
    content:
      'Thiết kế trải nghiệm người dùng (User Experience - UX) tập trung vào điều gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Cảm xúc, thái độ và phản ứng của người dùng khi tương tác với hệ thống, đảm bảo sự hài lòng và hiệu quả.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Giao diện trực quan và dễ sử dụng của hệ thống.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Cấu trúc logic và chức năng của hệ thống.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Bảo mật và tính ổn định của hệ thống.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 360,
    content: 'Mô hình hóa dữ liệu logic tập trung vào điều gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Xác định các thực thể, thuộc tính và mối quan hệ giữa chúng mà không quan tâm đến cách chúng được lưu trữ vật lý.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content:
          'Xác định cấu trúc bảng, kiểu dữ liệu và khóa chính/khóa ngoại trong cơ sở dữ liệu.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content:
          'Mô tả luồng di chuyển của dữ liệu qua các quy trình nghiệp vụ.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content:
          'Thiết kế giao diện mà người dùng sẽ sử dụng để tương tác với dữ liệu.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 361,
    content: 'Mô hình hóa dữ liệu vật lý tập trung vào điều gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Xác định cách dữ liệu sẽ được lưu trữ và tổ chức thực tế trong cơ sở dữ liệu (ví dụ: cấu trúc bảng, kiểu dữ liệu, khóa).',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content:
          'Xác định các thực thể và mối quan hệ giữa chúng ở mức khái niệm.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Mô tả các chức năng và hành vi của hệ thống.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Thiết kế kiến trúc tổng thể của hệ thống.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 362,
    content:
      "Nguyên tắc DRY (Don't Repeat Yourself) trong thiết kế hệ thống thông tin có nghĩa là gì?",
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Tránh trùng lặp thông tin hoặc logic trong hệ thống.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Thiết kế hệ thống đơn giản nhất có thể.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Tối ưu hóa hiệu suất của hệ thống.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Tài liệu hóa mọi khía cạnh của hệ thống.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 363,
    content:
      'Nguyên tắc KISS (Keep It Simple, Stupid) trong thiết kế hệ thống thông tin có nghĩa là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Thiết kế hệ thống càng đơn giản càng tốt.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Không lặp lại mã hoặc thông tin.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Tập trung vào yêu cầu của người dùng.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Sử dụng các công nghệ mới nhất.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 364,
    content:
      'Mô hình hóa quy trình nghiệp vụ (Business Process Modeling) nhằm mục đích gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Hiểu rõ cách thức hoạt động hiện tại của tổ chức và xác định các điểm cần cải thiện.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Thiết kế giao diện người dùng thân thiện.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Xây dựng cơ sở dữ liệu hiệu quả.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Lựa chọn công nghệ phù hợp cho hệ thống.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 365,
    content:
      'Use Case Diagram trong UML được sử dụng để mô hình hóa điều gì trong phân tích hệ thống?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Tương tác giữa người dùng (actors) và hệ thống để đạt được các mục tiêu cụ thể.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Cấu trúc tĩnh của các lớp và mối quan hệ giữa chúng.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content:
          'Luồng điều khiển và trình tự các hoạt động trong một quy trình.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Sự thay đổi trạng thái của các đối tượng trong hệ thống.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 366,
    content:
      'Activity Diagram trong UML được sử dụng để mô hình hóa điều gì trong phân tích hệ thống?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Luồng điều khiển và trình tự các hoạt động trong một quy trình nghiệp vụ hoặc use case.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Tương tác giữa người dùng và hệ thống.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Cấu trúc dữ liệu của hệ thống.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Kiến trúc phần mềm của hệ thống.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 367,
    content:
      'State Machine Diagram trong UML được sử dụng để mô hình hóa điều gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Các trạng thái khác nhau mà một đối tượng có thể trải qua và các sự kiện gây ra sự chuyển đổi giữa các trạng thái đó.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Luồng dữ liệu trong hệ thống.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Các mối quan hệ giữa các lớp trong hệ thống.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Việc triển khai các thành phần phần mềm trên phần cứng.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 368,
    content: 'Component Diagram trong UML được sử dụng để mô hình hóa điều gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Cấu trúc tĩnh của các thành phần phần mềm và các giao diện mà chúng cung cấp và yêu cầu.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Tương tác giữa các đối tượng theo thời gian.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Luồng điều khiển trong một quy trình.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Mô hình dữ liệu của hệ thống.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 369,
    content:
      'Deployment Diagram trong UML được sử dụng để mô hình hóa điều gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Việc triển khai các thành phần phần mềm trên các nút phần cứng.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Cấu trúc logic của cơ sở dữ liệu.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Giao diện người dùng của ứng dụng.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Quy trình nghiệp vụ của tổ chức.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 370,
    content:
      'CASE Tools (Computer-Aided Software Engineering) được sử dụng để làm gì trong phân tích và thiết kế hệ thống?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Hỗ trợ các nhà phân tích và thiết kế trong việc tạo, quản lý và duy trì các mô hình và tài liệu của hệ thống.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Tự động hóa quá trình viết mã chương trình.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Thực hiện kiểm thử tự động cho hệ thống.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Quản lý dự án phát triển phần mềm.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 371,
    content:
      'Nguyên mẫu (Prototype) được sử dụng để làm gì trong phân tích và thiết kế hệ thống?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Làm rõ yêu cầu của người dùng, khám phá các tùy chọn thiết kế và thu thập phản hồi sớm.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Thay thế cho hệ thống cuối cùng.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Tài liệu hóa chi tiết hệ thống.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Tối ưu hóa hiệu suất của hệ thống.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 372,
    content:
      'Phân tích tính khả thi (Feasibility Analysis) bao gồm những khía cạnh nào?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Tính khả thi về kỹ thuật, kinh tế, pháp lý, hoạt động và thời gian.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Phân tích SWOT và PESTEL.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Mô hình hóa dữ liệu và quy trình.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Thiết kế giao diện người dùng và cơ sở dữ liệu.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 373,
    content:
      'Phân tích chi phí - lợi ích (Cost-Benefit Analysis) được sử dụng để làm gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Đánh giá các chi phí và lợi ích tiềm năng của một dự án hệ thống thông tin để đưa ra quyết định đầu tư.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Xác định các yêu cầu chức năng của hệ thống.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Thiết kế kiến trúc kỹ thuật của hệ thống.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Lập kế hoạch triển khai hệ thống.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 374,
    content:
      'Phân tích rủi ro (Risk Analysis) trong dự án hệ thống thông tin nhằm mục đích gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Xác định, đánh giá và đưa ra các biện pháp giảm thiểu các rủi ro tiềm ẩn có thể ảnh hưởng đến dự án.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Xác định các bên liên quan của dự án.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Lập kế hoạch quản lý thay đổi cho dự án.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Đảm bảo chất lượng của hệ thống sau khi triển khai.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 375,
    content:
      'Quản lý phạm vi dự án (Project Scope Management) trong phân tích và thiết kế hệ thống là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Xác định và kiểm soát những gì được bao gồm và không được bao gồm trong dự án.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Quản lý thời gian và tiến độ của dự án.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Quản lý chi phí và ngân sách của dự án.',
        is_correct: false,
        order_index: 4,
      },
      {
        id: 4,
        content: 'Quản lý giao tiếp giữa các thành viên trong dự án.',
        is_correct: false,
        order_index: 3,
      },
    ] as Answer[],
  },
  {
    id: 376,
    content:
      'Phân tích các bên liên quan (Stakeholder Analysis) nhằm mục đích gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Xác định những cá nhân hoặc tổ chức có lợi ích hoặc bị ảnh hưởng bởi dự án.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Xác định các yêu cầu chức năng của hệ thống.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Thiết kế kiến trúc cơ sở dữ liệu.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Lập kế hoạch kiểm thử hệ thống.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 377,
    content:
      'Ma trận RACI (Responsible, Accountable, Consulted, Informed) được sử dụng để làm gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Xác định vai trò và trách nhiệm của các bên liên quan trong các hoạt động của dự án.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Phân tích rủi ro của dự án.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Lập kế hoạch truyền thông cho dự án.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Quản lý sự thay đổi trong dự án.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 378,
    content: 'Giao diện dòng lệnh (Command-Line Interface - CLI) là gì?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content:
          'Một loại giao diện người dùng cho phép người dùng tương tác với hệ thống bằng cách nhập các lệnh văn bản.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Một loại kiến trúc phần mềm.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Một mô hình cơ sở dữ liệu.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Một ngôn ngữ lập trình.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 379,
    content:
      'Giao diện đồ họa người dùng (Graphical User Interface - GUI) là gì?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content:
          'Một loại giao diện người dùng cho phép người dùng tương tác với hệ thống bằng cách sử dụng các biểu tượng, menu và các thành phần đồ họa khác.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Một phương pháp quản lý dự án.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Một kỹ thuật kiểm thử phần mềm.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Một loại cơ sở dữ liệu.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 380,
    content: 'Khả năng mở rộng (Scalability) của hệ thống thông tin là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Khả năng của hệ thống để xử lý lượng công việc ngày càng tăng hoặc mở rộng quy mô để đáp ứng nhu cầu phát triển.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Khả năng của hệ thống để hoạt động liên tục mà không bị lỗi.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Khả năng của hệ thống để dễ dàng được người dùng sử dụng.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content:
          'Khả năng của hệ thống để bảo vệ dữ liệu khỏi truy cập trái phép.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 381,
    content: 'Tính khả dụng (Availability) của hệ thống thông tin là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Khả năng của hệ thống để hoạt động và có thể truy cập được bởi người dùng khi cần.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Khả năng của hệ thống để mở rộng quy mô khi cần thiết.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Khả năng của hệ thống để bảo vệ dữ liệu.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Khả năng của hệ thống để dễ dàng bảo trì và nâng cấp.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 382,
    content: 'Tính bảo mật (Security) của hệ thống thông tin là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Khả năng của hệ thống để bảo vệ dữ liệu và chức năng khỏi truy cập, sử dụng, tiết lộ, gián đoạn, sửa đổi hoặc phá hủy trái phép.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content:
          'Khả năng của hệ thống để đáp ứng nhanh chóng các yêu cầu của người dùng.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Khả năng của hệ thống để tích hợp với các hệ thống khác.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content:
          'Khả năng của hệ thống để dễ dàng tùy chỉnh theo nhu cầu của người dùng.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 383,
    content: 'Tính toàn vẹn dữ liệu (Data Integrity) là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Đảm bảo tính chính xác, nhất quán và đáng tin cậy của dữ liệu trong suốt vòng đời của nó.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Khả năng truy cập dữ liệu nhanh chóng và hiệu quả.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Khả năng lưu trữ lượng lớn dữ liệu.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Khả năng phục hồi dữ liệu sau sự cố.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 384,
    content: 'Thiết kế hướng đối tượng (Object-Oriented Design - OOD) là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Một phương pháp thiết kế phần mềm dựa trên khái niệm về các đối tượng, có thuộc tính và hành vi.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content:
          'Một phương pháp thiết kế tập trung vào các chức năng của hệ thống.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Một phương pháp thiết kế dựa trên luồng dữ liệu.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Một phương pháp thiết kế dựa trên cấu trúc dữ liệu.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 385,
    content: 'Phân tích cấu trúc (Structured Analysis) là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Một phương pháp phân tích hệ thống tập trung vào luồng dữ liệu và các quy trình xử lý.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content:
          'Một phương pháp phân tích dựa trên các đối tượng và tương tác giữa chúng.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content:
          'Một phương pháp phân tích tập trung vào yêu cầu của người dùng.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Một phương pháp phân tích dựa trên kiến trúc của hệ thống.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 386,
    content: 'Thiết kế cấu trúc (Structured Design) là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Một phương pháp thiết kế phần mềm tập trung vào việc chia hệ thống thành các module có cấu trúc rõ ràng và mối quan hệ đơn giản.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Một phương pháp thiết kế dựa trên các đối tượng và lớp.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Một phương pháp thiết kế tập trung vào giao diện người dùng.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Một phương pháp thiết kế dựa trên cơ sở dữ liệu.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 387,
    content: 'Coupling (Độ liên kết) trong thiết kế phần mềm là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Mức độ phụ thuộc lẫn nhau giữa các module trong hệ thống.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Mức độ gắn kết của các phần tử bên trong một module.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Số lượng dòng code trong một module.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Tốc độ thực thi của một module.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 388,
    content: 'Cohesion (Độ gắn kết) trong thiết kế phần mềm là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Mức độ mà các phần tử bên trong một module thuộc về nhau và cùng thực hiện một chức năng rõ ràng.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Mức độ phụ thuộc giữa các module trong hệ thống.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Sự phức tạp của logic bên trong một module.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Khả năng tái sử dụng của một module.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 389,
    content:
      'Chuẩn hóa cơ sở dữ liệu (Database Normalization) nhằm mục đích gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Giảm thiểu sự dư thừa dữ liệu và cải thiện tính toàn vẹn dữ liệu.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Tăng tốc độ truy vấn dữ liệu.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Đơn giản hóa cấu trúc cơ sở dữ liệu.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Bảo vệ dữ liệu khỏi truy cập trái phép.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 390,
    content: 'Các dạng chuẩn hóa cơ sở dữ liệu phổ biến bao gồm:',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: '1NF, 2NF, 3NF, BCNF.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'ERD, DFD, UML.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'SQL, NoSQL.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'CRUD, REST.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 391,
    content:
      'Mô hình hóa quy trình nghiệp vụ BPMN (Business Process Model and Notation) là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Một ký hiệu đồ họa tiêu chuẩn để mô tả các quy trình nghiệp vụ.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Một ngôn ngữ truy vấn cơ sở dữ liệu.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Một phương pháp quản lý dự án.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Một công cụ thiết kế giao diện người dùng.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 392,
    content: 'Phân tích khoảng cách (Gap Analysis) được sử dụng để làm gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Xác định sự khác biệt giữa trạng thái hiện tại và trạng thái mong muốn của một tổ chức hoặc hệ thống.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Phân tích các yêu cầu chức năng của hệ thống.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Thiết kế kiến trúc tổng thể của hệ thống.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Đánh giá hiệu suất của hệ thống sau khi triển khai.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 393,
    content: 'Phân tích PESTEL là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Một khung phân tích các yếu tố chính trị, kinh tế, xã hội, công nghệ, môi trường và pháp lý có thể ảnh hưởng đến một tổ chức hoặc dự án.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Một kỹ thuật thu thập yêu cầu người dùng.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Một phương pháp mô hình hóa dữ liệu.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Một công cụ quản lý rủi ro dự án.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 394,
    content: 'Mô hình 5 lực lượng Porter được sử dụng để làm gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Phân tích tính cạnh tranh trong một ngành.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Phân tích các yếu tố vĩ mô ảnh hưởng đến tổ chức.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Mô hình hóa chuỗi giá trị của tổ chức.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Xác định các bên liên quan của dự án.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 395,
    content:
      'Phân tích chuỗi giá trị (Value Chain Analysis) được sử dụng để làm gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Phân tích các hoạt động chính và hỗ trợ mà một tổ chức thực hiện để tạo ra giá trị cho khách hàng.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Đánh giá mức độ cạnh tranh trong ngành.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Phân tích các yếu tố bên ngoài ảnh hưởng đến tổ chức.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Xác định các rủi ro tiềm ẩn của dự án.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 396,
    content: 'Yêu cầu nghiệp vụ (Business Requirement) mô tả điều gì?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content:
          'Nhu cầu và mục tiêu của tổ chức mà hệ thống thông tin cần đáp ứng.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Cách người dùng sẽ tương tác với hệ thống.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Cách dữ liệu sẽ được lưu trữ trong hệ thống.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Kiến trúc kỹ thuật của hệ thống.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 397,
    content: 'Yêu cầu hệ thống (System Requirement) mô tả điều gì?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content:
          'Các chức năng, hiệu suất và các thuộc tính khác mà hệ thống thông tin phải có để đáp ứng yêu cầu nghiệp vụ.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Mục tiêu kinh doanh mà hệ thống cần đạt được.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Giao diện người dùng của hệ thống.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Cấu trúc cơ sở dữ liệu của hệ thống.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 398,
    content: 'Phân tích chi phí vòng đời (Life Cycle Cost Analysis) là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Đánh giá tổng chi phí của một hệ thống thông tin trong suốt vòng đời của nó, từ giai đoạn lên kế hoạch đến khi ngừng sử dụng.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Phân tích lợi ích mà hệ thống mang lại cho tổ chức.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'So sánh chi phí của các giải pháp hệ thống khác nhau.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Dự đoán chi phí bảo trì hệ thống.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 399,
    content:
      'Đánh giá sau triển khai (Post-Implementation Review) nhằm mục đích gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Đánh giá hiệu quả của hệ thống đã triển khai, xác định các bài học kinh nghiệm và đề xuất cải tiến.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Đào tạo người dùng cuối về cách sử dụng hệ thống.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Khắc phục các lỗi phát sinh sau khi triển khai.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Lập kế hoạch cho các nâng cấp hệ thống trong tương lai.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 400,
    content: 'Tài liệu hóa hệ thống (System Documentation) có vai trò gì?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content:
          'Cung cấp thông tin chi tiết về hệ thống cho các bên liên quan, hỗ trợ việc phát triển, bảo trì và nâng cấp hệ thống.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Tự động hóa các quy trình nghiệp vụ.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Bảo vệ hệ thống khỏi các mối đe dọa bảo mật.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Tăng tốc độ xử lý của hệ thống.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
];

const questionData6: Partial<Question>[] = [
  {
    id: 251,
    content: 'Hệ điều hành (Operating System - OS) là gì?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content:
          'Một phần mềm hệ thống quản lý tài nguyên phần cứng và phần mềm của máy tính, đồng thời cung cấp các dịch vụ cơ bản cho các chương trình ứng dụng.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Một chương trình ứng dụng được sử dụng để duyệt web.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Một thành phần phần cứng chính của máy tính.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Một ngôn ngữ lập trình được sử dụng để viết phần mềm.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 252,
    content: 'Chức năng chính của hệ điều hành là gì?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content:
          'Quản lý tài nguyên (CPU, bộ nhớ, thiết bị ngoại vi), cung cấp giao diện người dùng và hỗ trợ thực thi ứng dụng.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Tăng tốc độ xử lý của máy tính.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Bảo vệ máy tính khỏi virus.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Kết nối máy tính với internet.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 253,
    content: 'Kernel (Nhân) của hệ điều hành là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Phần cốt lõi của hệ điều hành, chịu trách nhiệm quản lý các tài nguyên cơ bản nhất của hệ thống.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Giao diện người dùng đồ họa của hệ điều hành.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Các chương trình ứng dụng được cài đặt trên hệ điều hành.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Bộ nhớ chính của máy tính.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 254,
    content: 'Process (Tiến trình) trong hệ điều hành là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Một chương trình đang được thực thi, bao gồm mã chương trình, dữ liệu và trạng thái hiện tại.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Một đơn vị lưu trữ dữ liệu trên đĩa cứng.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Một thiết bị phần cứng xử lý dữ liệu.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Một giao diện người dùng để tương tác với hệ điều hành.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 255,
    content: 'Thread (Luồng) trong hệ điều hành là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Một đơn vị thực thi nhỏ nhất trong một tiến trình, có thể chạy song song với các luồng khác trong cùng tiến trình.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Một tiến trình độc lập với các tiến trình khác.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Một vùng nhớ được cấp phát cho một tiến trình.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Một tín hiệu được gửi giữa các tiến trình.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 256,
    content: 'Process Scheduling (Lập lịch tiến trình) là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Quá trình quyết định tiến trình nào sẽ được cấp phát CPU để thực thi tại một thời điểm nhất định.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Quá trình tạo ra các tiến trình mới.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Quá trình quản lý bộ nhớ cho các tiến trình.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Quá trình đồng bộ hóa giữa các tiến trình.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 257,
    content: 'Hãy kể tên một số thuật toán lập lịch tiến trình phổ biến.',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'First-Come, First-Served (FCFS), Shortest-Job-First (SJF), Priority Scheduling, Round Robin.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Bubble Sort, Insertion Sort, Merge Sort.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'TCP, UDP, HTTP.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Stack, Queue, Linked List.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 258,
    content: 'Memory Management (Quản lý bộ nhớ) trong hệ điều hành là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Quá trình quản lý và cấp phát bộ nhớ cho các tiến trình, đồng thời theo dõi bộ nhớ đã sử dụng và bộ nhớ còn trống.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Quá trình lập lịch cho các tiến trình sử dụng CPU.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Quá trình quản lý các thiết bị ngoại vi.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Quá trình quản lý các tệp và thư mục.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 259,
    content: 'Paging (Phân trang) là gì trong quản lý bộ nhớ?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Một kỹ thuật chia bộ nhớ vật lý thành các khối có kích thước cố định gọi là trang (frame) và bộ nhớ logic của tiến trình thành các khối có kích thước tương ứng gọi là trang (page).',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Một kỹ thuật cấp phát bộ nhớ liên tục cho các tiến trình.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content:
          'Một kỹ thuật hoán đổi các tiến trình giữa bộ nhớ chính và bộ nhớ phụ.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Một kỹ thuật bảo vệ bộ nhớ của các tiến trình khác nhau.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 260,
    content: 'Segmentation (Phân đoạn) là gì trong quản lý bộ nhớ?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Một kỹ thuật chia bộ nhớ logic của tiến trình thành các đoạn (segment) có kích thước khác nhau, phản ánh cấu trúc logic của chương trình.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content:
          'Một kỹ thuật chia bộ nhớ vật lý thành các khối có kích thước cố định.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Một kỹ thuật nén dữ liệu trong bộ nhớ.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Một kỹ thuật phát hiện lỗi bộ nhớ.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 261,
    content: 'Virtual Memory (Bộ nhớ ảo) là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Một kỹ thuật cho phép các tiến trình có thể sử dụng bộ nhớ lớn hơn bộ nhớ vật lý có sẵn, bằng cách sử dụng một phần của đĩa cứng làm bộ nhớ mở rộng.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Bộ nhớ vật lý (RAM) của máy tính.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Bộ nhớ cache của CPU.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Bộ nhớ chỉ đọc (ROM).',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 262,
    content: 'Thrashing là gì trong quản lý bộ nhớ ảo?',
    difficulty_level: 'hard',
    answers: [
      {
        id: 1,
        content:
          'Một tình trạng xảy ra khi hệ thống dành phần lớn thời gian để hoán đổi các trang giữa bộ nhớ chính và bộ nhớ phụ, dẫn đến hiệu suất hệ thống giảm đáng kể.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content:
          'Một lỗi xảy ra khi một tiến trình cố gắng truy cập một trang không hợp lệ.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Một kỹ thuật tối ưu hóa việc sử dụng bộ nhớ cache.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Một quá trình giải phóng bộ nhớ không còn được sử dụng.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 263,
    content: 'File System (Hệ thống tệp) là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Một cấu trúc tổ chức và quản lý các tệp và thư mục trên thiết bị lưu trữ (ví dụ: đĩa cứng).',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Một phần mềm quản lý bộ nhớ chính.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Một giao diện người dùng để tương tác với hệ điều hành.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Một tập hợp các giao thức mạng.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 264,
    content: 'Hãy kể tên một số hệ thống tệp phổ biến.',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: 'FAT32, NTFS, ext4, HFS+.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'TCP/IP, DNS, HTTP.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Windows, Linux, macOS.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'RAM, ROM, HDD.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 265,
    content: 'Directory (Thư mục) trong hệ thống tệp dùng để làm gì?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: 'Tổ chức và nhóm các tệp và thư mục con lại với nhau.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Lưu trữ dữ liệu của các tệp.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Thực thi các chương trình.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Quản lý bộ nhớ ảo.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 266,
    content:
      'File Permissions (Quyền truy cập tệp) trong hệ thống tệp dùng để làm gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Kiểm soát những người dùng hoặc nhóm người dùng nào có thể đọc, ghi hoặc thực thi một tệp hoặc thư mục.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Mã hóa nội dung của tệp để bảo vệ dữ liệu.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Nén kích thước của tệp để tiết kiệm dung lượng lưu trữ.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Theo dõi lịch sử thay đổi của tệp.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 267,
    content: 'I/O Management (Quản lý vào/ra) trong hệ điều hành là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Quá trình điều khiển và quản lý các thiết bị ngoại vi (ví dụ: bàn phím, chuột, máy in, ổ đĩa) để tương tác với hệ thống.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Quá trình quản lý bộ nhớ chính.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Quá trình lập lịch cho các tiến trình sử dụng CPU.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Quá trình quản lý các tệp và thư mục.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 268,
    content: 'Device Driver (Trình điều khiển thiết bị) là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Một phần mềm cho phép hệ điều hành giao tiếp và điều khiển một thiết bị phần cứng cụ thể.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content:
          'Một thiết bị phần cứng dùng để kết nối các thiết bị ngoại vi.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Một giao thức truyền dữ liệu giữa hệ điều hành và thiết bị.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Một chương trình ứng dụng để quản lý các thiết bị ngoại vi.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 269,
    content: 'User Interface (Giao diện người dùng) của hệ điều hành là gì?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content:
          'Phương tiện cho phép người dùng tương tác với hệ điều hành và các ứng dụng.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Phần cốt lõi của hệ điều hành.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Bộ nhớ chính của máy tính.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Các chương trình ứng dụng được cài đặt trên máy tính.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 270,
    content:
      'Hãy kể tên hai loại giao diện người dùng phổ biến của hệ điều hành.',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content:
          'Command-Line Interface (CLI) và Graphical User Interface (GUI).',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Kernel và Shell.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Process và Thread.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Paging và Segmentation.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 271,
    content: 'Shell trong hệ điều hành là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Một chương trình cho phép người dùng tương tác với kernel thông qua các lệnh văn bản (trong CLI) hoặc các yếu tố đồ họa (trong GUI).',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Phần cứng chịu trách nhiệm hiển thị giao diện người dùng.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Một giao thức mạng được sử dụng bởi hệ điều hành.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Một tiện ích hệ thống để quản lý tệp và thư mục.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 272,
    content: 'System Call (Lời gọi hệ thống) là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Một cơ chế cho phép các chương trình ứng dụng yêu cầu các dịch vụ từ kernel của hệ điều hành.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Một lệnh được thực thi trực tiếp bởi phần cứng.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Một thông báo lỗi từ hệ điều hành.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Một hàm thư viện được sử dụng bởi các chương trình ứng dụng.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 273,
    content: 'Multitasking (Đa nhiệm) là gì trong hệ điều hành?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content:
          'Khả năng của hệ điều hành cho phép nhiều tác vụ (tiến trình hoặc luồng) được thực hiện đồng thời hoặc gần như đồng thời.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content:
          'Khả năng của hệ điều hành hỗ trợ nhiều người dùng cùng một lúc.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Khả năng của hệ điều hành quản lý nhiều bộ xử lý.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content:
          'Khả năng của hệ điều hành chạy các ứng dụng 32-bit và 64-bit.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 274,
    content: 'Multithreading (Đa luồng) là gì trong hệ điều hành?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Khả năng của một tiến trình đơn lẻ có nhiều luồng thực thi đồng thời.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Khả năng chạy nhiều tiến trình đồng thời.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content:
          'Khả năng của hệ điều hành hỗ trợ nhiều loại thiết bị ngoại vi.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Khả năng của hệ điều hành quản lý nhiều người dùng.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 275,
    content: 'Multiprocessing (Đa xử lý) là gì trong hệ điều hành?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Khả năng của hệ điều hành hỗ trợ việc sử dụng nhiều bộ xử lý (CPU) để thực hiện các tác vụ song song.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Khả năng chạy nhiều tiến trình đồng thời trên một CPU.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Khả năng của một tiến trình có nhiều luồng thực thi.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Khả năng của hệ điều hành quản lý nhiều thiết bị lưu trữ.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 276,
    content: 'Real-time Operating System (RTOS) là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Một loại hệ điều hành được thiết kế để đáp ứng các sự kiện hoặc tác vụ trong một khoảng thời gian nghiêm ngặt và có thể dự đoán được.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Một hệ điều hành dành cho máy tính cá nhân.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Một hệ điều hành dựa trên đám mây.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Một hệ điều hành mã nguồn mở.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 277,
    content: 'Embedded Operating System (Hệ điều hành nhúng) là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Một hệ điều hành được thiết kế đặc biệt cho các thiết bị nhúng (embedded systems) với tài nguyên hạn chế và các yêu cầu cụ thể.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Một hệ điều hành dành cho máy chủ.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Một hệ điều hành cho thiết bị di động.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Một hệ điều hành có giao diện đồ họa phức tạp.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 278,
    content: 'Virtualization (Ảo hóa) trong hệ điều hành là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Công nghệ cho phép chạy nhiều hệ điều hành hoặc nhiều phiên bản của cùng một hệ điều hành trên một máy chủ vật lý duy nhất.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Công nghệ tăng tốc độ xử lý đồ họa.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Công nghệ quản lý bộ nhớ hiệu quả hơn.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Công nghệ bảo mật hệ thống.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 279,
    content: 'Hypervisor là gì trong ảo hóa?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Một phần mềm hoặc phần cứng tạo và quản lý các máy ảo (virtual machines).',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Một hệ điều hành khách chạy trên máy ảo.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Máy chủ vật lý chạy các máy ảo.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Một định dạng tệp cho máy ảo.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 280,
    content: 'Containerization (Công nghệ container) là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Một phương pháp đóng gói ứng dụng và các thư viện, phụ thuộc của nó vào một đơn vị di động gọi là container, có thể chạy nhất quán trên nhiều môi trường.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Một loại ảo hóa toàn bộ hệ điều hành.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Một phương pháp quản lý tài nguyên phần cứng.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Một công nghệ bảo mật ứng dụng.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 281,
    content: 'Docker là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Một nền tảng phổ biến để phát triển, triển khai và quản lý các ứng dụng bằng công nghệ container.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Một hệ điều hành mã nguồn mở.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Một công cụ ảo hóa máy chủ.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Một ngôn ngữ lập trình.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 282,
    content: 'Kubernetes là gì?',
    difficulty_level: 'hard',
    answers: [
      {
        id: 1,
        content:
          'Một hệ thống điều phối container mã nguồn mở để tự động hóa việc triển khai, mở rộng quy mô và quản lý các ứng dụng đã được container hóa.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Một công cụ tạo container.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Một nền tảng điện toán đám mây.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Một giao thức mạng cho container.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 283,
    content:
      'Security in Operating System (Bảo mật trong hệ điều hành) bao gồm những khía cạnh nào?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Authentication (Xác thực), Authorization (Ủy quyền), Access Control (Kiểm soát truy cập), Auditing (Kiểm toán).',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Process scheduling, Memory management, I/O management.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'GUI, CLI, Shell.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Paging, Segmentation, Virtual memory.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 284,
    content: 'Authentication (Xác thực) trong bảo mật hệ điều hành là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Quá trình xác minh danh tính của người dùng hoặc tiến trình cố gắng truy cập hệ thống.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content:
          'Quá trình cấp quyền truy cập tài nguyên cho người dùng đã xác thực.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content:
          'Quá trình theo dõi và ghi lại các hoạt động của người dùng trên hệ thống.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Quá trình mã hóa dữ liệu để bảo vệ khỏi truy cập trái phép.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 285,
    content: 'Authorization (Ủy quyền) trong bảo mật hệ điều hành là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Quá trình xác định những tài nguyên nào mà người dùng hoặc tiến trình đã được xác thực có quyền truy cập và thực hiện những hành động nào.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Quá trình xác minh danh tính của người dùng.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Quá trình kiểm soát quyền truy cập vật lý vào máy chủ.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Quá trình sao lưu dữ liệu hệ thống.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 286,
    content:
      'Access Control (Kiểm soát truy cập) trong bảo mật hệ điều hành là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Các cơ chế và chính sách được sử dụng để quản lý quyền truy cập của người dùng và tiến trình vào tài nguyên hệ thống.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Quá trình phát hiện và loại bỏ phần mềm độc hại.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Quá trình cấu hình tường lửa.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Quá trình vá lỗi bảo mật của hệ điều hành.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 287,
    content: 'Auditing (Kiểm toán) trong bảo mật hệ điều hành là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Quá trình theo dõi và ghi lại các sự kiện và hoạt động của người dùng trên hệ thống để phục vụ cho việc phân tích bảo mật và điều tra.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Quá trình khôi phục hệ thống sau sự cố.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Quá trình mã hóa dữ liệu khi truyền qua mạng.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Quá trình quản lý mật khẩu người dùng.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 288,
    content:
      'Hãy kể tên một số hệ điều hành dành cho máy tính cá nhân phổ biến.',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: 'Windows, macOS, Linux.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Android, iOS, Chrome OS.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Ubuntu, Fedora, Debian.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Server 2019, CentOS, Red Hat Enterprise Linux.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 289,
    content:
      'Hãy kể tên một số hệ điều hành dành cho thiết bị di động phổ biến.',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: 'Android, iOS.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Windows, macOS, Linux.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Ubuntu Touch, Sailfish OS.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Chrome OS, iPadOS.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 290,
    content: 'Hãy kể tên một số hệ điều hành dành cho máy chủ phổ biến.',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content:
          'Windows Server, Linux (ví dụ: CentOS, Ubuntu Server, Red Hat Enterprise Linux).',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'macOS Server, Chrome OS.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Android, iOS.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Windows XP, Windows 7, Windows 10.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 291,
    content: 'Hệ điều hành mã nguồn mở (Open Source Operating System) là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Hệ điều hành mà mã nguồn của nó được cung cấp công khai và người dùng có quyền tự do sử dụng, nghiên cứu, sửa đổi và phân phối.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Hệ điều hành chỉ có thể được sử dụng miễn phí.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Hệ điều hành được phát triển bởi một công ty duy nhất.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Hệ điều hành có giao diện người dùng đồ họa.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 292,
    content: 'Hãy kể tên một số hệ điều hành mã nguồn mở phổ biến.',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: 'Linux (ví dụ: Ubuntu, Fedora, Debian, CentOS), Android.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Windows, macOS, iOS.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Chrome OS, Windows Server.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'MS-DOS, Solaris.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 293,
    content: 'Patch (Bản vá) trong hệ điều hành là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Một bản cập nhật phần mềm được phát hành để sửa lỗi, cải thiện hiệu suất hoặc vá các lỗ hổng bảo mật của hệ điều hành.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Một phiên bản mới hoàn toàn của hệ điều hành.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Một chương trình ứng dụng được cài đặt trên hệ điều hành.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Một thiết bị phần cứng hỗ trợ hệ điều hành.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 294,
    content: 'Driver Rollback (Quay lại trình điều khiển) là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Một tính năng cho phép người dùng khôi phục về phiên bản trình điều khiển thiết bị đã cài đặt trước đó, thường được sử dụng khi phiên bản mới gây ra sự cố.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Một quá trình gỡ cài đặt trình điều khiển thiết bị.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content:
          'Một quá trình cập nhật trình điều khiển thiết bị lên phiên bản mới nhất.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Một quá trình sao lưu trình điều khiển thiết bị.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 295,
    content: 'Blue Screen of Death (BSoD) là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Một màn hình lỗi nghiêm trọng hiển thị trên hệ điều hành Windows khi gặp phải sự cố hệ thống nghiêm trọng, thường dẫn đến việc hệ thống phải khởi động lại.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Một màn hình đăng nhập của hệ điều hành.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Một thông báo cập nhật phần mềm.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Một chế độ an toàn của hệ điều hành.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 296,
    content: 'Kernel Panic là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Một lỗi nghiêm trọng trong kernel của hệ điều hành Unix-like (ví dụ: Linux, macOS) khiến hệ thống không thể tiếp tục hoạt động và thường phải khởi động lại.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Một cảnh báo về việc sử dụng CPU quá cao.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Một thông báo về việc hết dung lượng đĩa cứng.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Một chế độ khôi phục hệ thống.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 297,
    content: 'Booting (Khởi động) hệ điều hành là gì?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content:
          'Quá trình khởi chạy hệ điều hành khi máy tính được bật nguồn hoặc khởi động lại.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Quá trình tắt máy tính.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Quá trình cài đặt phần mềm mới.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Quá trình kết nối với mạng internet.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 298,
    content: 'BIOS (Basic Input/Output System) là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Một firmware được lưu trữ trên chip ROM của bo mạch chủ, thực hiện các kiểm tra phần cứng ban đầu và khởi động hệ điều hành.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content:
          'Một phần mềm quản lý các thiết bị ngoại vi sau khi hệ điều hành đã khởi động.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Một thành phần phần cứng chính của CPU.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Một giao diện đồ họa để cấu hình phần cứng.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 299,
    content: 'UEFI (Unified Extensible Firmware Interface) là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Một tiêu chuẩn firmware hiện đại thay thế BIOS, cung cấp nhiều tính năng hơn và hỗ trợ phần cứng mới hơn.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Một hệ điều hành nhúng cho các thiết bị IoT.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Một giao thức mạng để khởi động từ xa.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Một công cụ chẩn đoán phần cứng.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 300,
    content: 'Safe Mode (Chế độ an toàn) trong hệ điều hành là gì?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content:
          'Một chế độ khởi động hệ điều hành với các trình điều khiển và dịch vụ cơ bản nhất, thường được sử dụng để khắc phục sự cố.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Một chế độ bảo mật cao của hệ điều hành.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Một chế độ tiết kiệm năng lượng của hệ điều hành.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Một chế độ cho phép chạy các ứng dụng cũ hơn.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
];
const questionData7: Partial<Question>[] = [
  {
    id: 301,
    content: 'CNPM là viết tắt của cụm từ nào?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: 'Công nghệ phần mềm',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Chuyên nghiệp phần mềm',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Cấu trúc phần mềm',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Chất lượng phần mềm',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 302,
    content: 'Mục tiêu chính của Công nghệ phần mềm là gì?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: 'Sản xuất phần mềm chất lượng cao, đúng thời gian và chi phí.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Viết mã chương trình nhanh nhất có thể.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Sử dụng công nghệ mới nhất trong mọi dự án.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Tối đa hóa lợi nhuận cho công ty phát triển phần mềm.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 303,
    content:
      'Quy trình phát triển phần mềm (SDLC) bao gồm những giai đoạn chính nào?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Phân tích yêu cầu, Thiết kế, Phát triển, Kiểm thử, Triển khai, Bảo trì.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Lập kế hoạch, Viết mã, Kiểm lỗi, Chạy thử.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Ý tưởng, Thực hiện, Đánh giá.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Nghiên cứu, Xây dựng, Phân phối.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 304,
    content: 'Phân tích yêu cầu trong CNPM nhằm mục đích gì?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content:
          'Hiểu rõ nhu cầu và mong muốn của người dùng đối với phần mềm.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Lựa chọn ngôn ngữ lập trình phù hợp.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Xác định cấu trúc cơ sở dữ liệu.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Lập kế hoạch kiểm thử phần mềm.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 305,
    content: 'Thiết kế phần mềm trong CNPM bao gồm những hoạt động nào?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Thiết kế kiến trúc, thiết kế giao diện, thiết kế cơ sở dữ liệu.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Viết mã nguồn và biên dịch chương trình.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Tìm kiếm và sửa lỗi trong mã nguồn.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Đóng gói và phân phối phần mềm cho người dùng.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 306,
    content: 'Mô hình thác nước (Waterfall) trong SDLC là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Một mô hình tuần tự, các giai đoạn phát triển diễn ra theo trình tự.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content:
          'Một mô hình linh hoạt, cho phép thay đổi yêu cầu trong quá trình phát triển.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content:
          'Một mô hình phát triển dựa trên việc xây dựng các phiên bản thử nghiệm.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content:
          'Một mô hình phát triển tập trung vào sự hợp tác chặt chẽ với khách hàng.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 307,
    content: 'Kiểm thử phần mềm (Software Testing) có vai trò gì trong CNPM?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: 'Đảm bảo chất lượng của phần mềm, phát hiện và sửa lỗi.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Tăng tốc độ phát triển phần mềm.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Giảm chi phí phát triển phần mềm.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Làm cho giao diện phần mềm đẹp hơn.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 308,
    content: 'Kiểm thử hộp đen (Black-box testing) là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Kiểm thử chức năng của phần mềm mà không cần biết cấu trúc bên trong.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Kiểm thử cấu trúc bên trong và logic của mã nguồn.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Kiểm thử hiệu suất của phần mềm dưới tải lớn.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Kiểm thử tính bảo mật của phần mềm.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 309,
    content: 'Kiểm thử hộp trắng (White-box testing) là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Kiểm thử cấu trúc bên trong và logic của mã nguồn.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Kiểm thử chức năng của phần mềm dựa trên yêu cầu.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Kiểm thử khả năng sử dụng của phần mềm.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content:
          'Kiểm thử khả năng tương thích của phần mềm với các hệ thống khác.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 310,
    content:
      'Triển khai phần mềm (Software Deployment) là giai đoạn nào trong SDLC?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: 'Đưa phần mềm đã hoàn thành vào môi trường hoạt động thực tế.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Thu thập và phân tích yêu cầu của người dùng.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Viết mã nguồn cho phần mềm.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Tìm và sửa các lỗi trong phần mềm.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 311,
    content:
      'Bảo trì phần mềm (Software Maintenance) bao gồm những hoạt động gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Sửa lỗi, cải tiến hiệu suất, cập nhật tính năng, thích ứng với môi trường mới.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Lập kế hoạch cho các phiên bản phần mềm tiếp theo.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Kiểm thử lại toàn bộ phần mềm sau mỗi thay đổi nhỏ.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Đào tạo người dùng cuối về cách sử dụng phần mềm.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 312,
    content:
      'Agile Manifesto đề cao những giá trị nào trong phát triển phần mềm?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Cá nhân và tương tác hơn là quy trình và công cụ; Phần mềm chạy tốt hơn là tài liệu đầy đủ; Hợp tác với khách hàng hơn là đàm phán hợp đồng; Phản hồi với thay đổi hơn là tuân theo kế hoạch.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content:
          'Quy trình nghiêm ngặt hơn là sự linh hoạt; Tài liệu chi tiết hơn là phần mềm hoạt động; Hợp đồng chặt chẽ hơn là sự hợp tác; Kế hoạch chi tiết hơn là khả năng thích ứng.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content:
          'Công cụ mạnh mẽ hơn là tương tác cá nhân; Tài liệu ngắn gọn hơn là tài liệu đầy đủ; Đàm phán linh hoạt hơn là hợp tác; Kế hoạch tổng quan hơn là phản hồi thay đổi.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content:
          'Sự độc lập của các thành viên hơn là tương tác; Phần mềm ổn định hơn là phần mềm mới; Tuân thủ yêu cầu hơn là hợp tác; Kế hoạch cố định hơn là phản hồi thay đổi.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 313,
    content:
      'Scrum là một framework thuộc phương pháp phát triển phần mềm nào?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: 'Agile',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Waterfall',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Spiral',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'V-model',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 314,
    content: 'Trong Scrum, Product Backlog là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Danh sách ưu tiên các tính năng, yêu cầu và cải tiến cần thực hiện trong dự án.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Bảng theo dõi tiến độ công việc của nhóm phát triển.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Tài liệu mô tả kiến trúc tổng thể của phần mềm.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content:
          'Báo cáo các rủi ro và vấn đề phát sinh trong quá trình phát triển.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 315,
    content: 'Trong Scrum, Sprint là gì?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content:
          'Một khoảng thời gian cố định (thường từ 1 đến 4 tuần) để nhóm phát triển hoàn thành một số lượng công việc nhất định.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Một cuộc họp hàng ngày của nhóm phát triển.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Một buổi đánh giá kết quả công việc sau mỗi Sprint.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Một vai trò trong nhóm Scrum.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 316,
    content: 'Trong Scrum, Daily Scrum (hay Daily Stand-up) là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Một cuộc họp ngắn hàng ngày để nhóm phát triển chia sẻ tiến độ và kế hoạch cho ngày làm việc.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Một buổi họp để lập kế hoạch cho Sprint tiếp theo.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Một buổi đánh giá kết quả công việc của Sprint hiện tại.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content:
          'Một buổi họp để giải quyết các vấn đề phát sinh trong Sprint.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 317,
    content: 'Trong Scrum, Sprint Review là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Một buổi họp vào cuối Sprint để nhóm phát triển trình bày kết quả công việc cho Product Owner và các bên liên quan.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Một cuộc họp hàng ngày của nhóm phát triển.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Một buổi họp để lập kế hoạch cho Sprint tiếp theo.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content:
          'Một buổi họp để nhìn lại và cải tiến quy trình làm việc của nhóm.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 318,
    content: 'Trong Scrum, Sprint Retrospective là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Một buổi họp vào cuối Sprint để nhóm Scrum nhìn lại và tìm cách cải tiến quy trình làm việc.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Một buổi họp để trình bày kết quả công việc cho khách hàng.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Một cuộc họp hàng ngày để cập nhật tiến độ.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Một buổi họp để lập kế hoạch cho các Sprint tiếp theo.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 319,
    content: 'Vai trò của Product Owner trong Scrum là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Đại diện cho tiếng nói của khách hàng, quản lý Product Backlog và đảm bảo giá trị của sản phẩm.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Điều phối và hỗ trợ nhóm phát triển, loại bỏ các rào cản.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Thực hiện các công việc phát triển phần mềm.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Kiểm thử chất lượng của phần mềm.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 320,
    content: 'Vai trò của Scrum Master trong Scrum là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Người điều phối và hỗ trợ nhóm Scrum, đảm bảo nhóm tuân thủ các nguyên tắc và thực hành của Scrum.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Người chịu trách nhiệm về mặt kỹ thuật của dự án.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Người quản lý ngân sách và tiến độ của dự án.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Người đưa ra quyết định về các tính năng của sản phẩm.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },

  {
    id: 321,
    content: 'Ưu điểm của phương pháp phát triển phần mềm Agile là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Linh hoạt, thích ứng tốt với thay đổi, giao sản phẩm nhanh chóng và liên tục, tăng cường sự hợp tác.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content:
          'Quy trình nghiêm ngặt, tài liệu đầy đủ, dễ dàng quản lý dự án lớn.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Tiết kiệm chi phí phát triển tối đa.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Đảm bảo sản phẩm hoàn hảo ngay từ đầu.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 322,
    content: 'Nhược điểm của phương pháp phát triển phần mềm Agile là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Có thể thiếu tài liệu đầy đủ, đòi hỏi sự tham gia tích cực của khách hàng, có thể khó quản lý với dự án rất lớn.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Tốn nhiều thời gian và chi phí hơn các phương pháp khác.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Khó thay đổi yêu cầu sau khi dự án bắt đầu.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Không phù hợp với các dự án có yêu cầu không rõ ràng.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 323,
    content: 'Mô hình chữ V (V-model) trong SDLC nhấn mạnh vào điều gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Mối quan hệ giữa các giai đoạn phát triển và các hoạt động kiểm thử tương ứng.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Sự lặp đi lặp lại và gia tăng trong quá trình phát triển.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Việc xây dựng các nguyên mẫu (prototype) để làm rõ yêu cầu.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Sự hợp tác chặt chẽ giữa nhóm phát triển và khách hàng.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 324,
    content:
      'Mô hình xoắn ốc (Spiral model) trong SDLC phù hợp với loại dự án nào?',
    difficulty_level: 'hard',
    answers: [
      {
        id: 1,
        content: 'Các dự án lớn, phức tạp và có nhiều rủi ro.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Các dự án nhỏ và có thời gian phát triển ngắn.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Các dự án có yêu cầu rõ ràng và ổn định.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content:
          'Các dự án mà khách hàng tham gia tích cực vào quá trình phát triển.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 325,
    content:
      'Phân tích nghiệp vụ (Business Analysis) đóng vai trò gì trong CNPM?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Xác định nhu cầu kinh doanh và chuyển đổi chúng thành yêu cầu phần mềm.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Viết mã nguồn cho các chức năng của phần mềm.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Kiểm tra chất lượng và hiệu suất của phần mềm.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Quản lý tiến độ và nguồn lực của dự án.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 326,
    content: 'Yêu cầu chức năng (Functional Requirement) mô tả điều gì?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: 'Các hành động mà phần mềm phải thực hiện.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content:
          'Các thuộc tính chất lượng của phần mềm (ví dụ: hiệu suất, bảo mật).',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Giao diện người dùng của phần mềm.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Cấu trúc cơ sở dữ liệu của phần mềm.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 327,
    content:
      'Yêu cầu phi chức năng (Non-functional Requirement) mô tả điều gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Các thuộc tính chất lượng của phần mềm, ví dụ: hiệu suất, bảo mật, khả năng sử dụng.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Các chức năng mà người dùng có thể thực hiện với phần mềm.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Quy trình phát triển phần mềm được sử dụng.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Ngôn ngữ lập trình được sử dụng để xây dựng phần mềm.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 328,
    content: 'Use Case trong phân tích yêu cầu dùng để làm gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Mô tả các tương tác giữa người dùng và hệ thống để đạt được một mục tiêu cụ thể.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Mô tả cấu trúc dữ liệu của hệ thống.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Mô tả kiến trúc tổng thể của phần mềm.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Mô tả các yêu cầu phi chức năng của hệ thống.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 329,
    content: 'UML (Unified Modeling Language) là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Một ngôn ngữ mô hình hóa trực quan để đặc tả, xây dựng, trực quan hóa và ghi lại các thành phần của hệ thống phần mềm.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Một ngôn ngữ lập trình hướng đối tượng.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Một hệ quản trị cơ sở dữ liệu.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Một công cụ quản lý dự án phần mềm.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 330,
    content: 'Diagram lớp (Class Diagram) trong UML dùng để mô tả điều gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Cấu trúc tĩnh của hệ thống, bao gồm các lớp, thuộc tính và mối quan hệ giữa chúng.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Hành vi động của hệ thống theo thời gian.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Các tương tác giữa các đối tượng trong hệ thống.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Quy trình nghiệp vụ của hệ thống.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 331,
    content:
      'Diagram tuần tự (Sequence Diagram) trong UML dùng để mô tả điều gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Các tương tác giữa các đối tượng theo trình tự thời gian.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Cấu trúc tĩnh của các lớp và mối quan hệ giữa chúng.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Các trạng thái khác nhau mà một đối tượng có thể trải qua.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Luồng điều khiển trong một chức năng hoặc quy trình.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 332,
    content: 'Kiến trúc phần mềm (Software Architecture) là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Cấu trúc cơ bản của một hệ thống phần mềm, bao gồm các thành phần, mối quan hệ giữa chúng và các nguyên tắc chỉ đạo thiết kế.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Giao diện người dùng của phần mềm.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Mã nguồn của phần mềm.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Cơ sở dữ liệu của phần mềm.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 333,
    content: 'Kiến trúc client-server là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Một kiến trúc trong đó một thành phần (client) yêu cầu dịch vụ từ một thành phần khác (server).',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content:
          'Một kiến trúc trong đó tất cả các thành phần đều có vai trò ngang nhau.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content:
          'Một kiến trúc trong đó các thành phần giao tiếp thông qua một bus chung.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content:
          'Một kiến trúc trong đó các thành phần được triển khai trên nhiều máy chủ.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 334,
    content: 'Kiến trúc microservices là gì?',
    difficulty_level: 'hard',
    answers: [
      {
        id: 1,
        content:
          'Một kiến trúc chia ứng dụng thành các dịch vụ nhỏ, độc lập, giao tiếp với nhau thông qua API.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content:
          'Một kiến trúc trong đó tất cả các chức năng của ứng dụng được đóng gói trong một đơn vị duy nhất.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Một kiến trúc tập trung vào việc xử lý dữ liệu lớn.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Một kiến trúc dành cho các ứng dụng di động.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 335,
    content: 'Mẫu thiết kế (Design Pattern) là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Một giải pháp chung, có thể tái sử dụng cho một vấn đề thiết kế thường gặp trong phát triển phần mềm.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Một đoạn mã nguồn có thể được sao chép và sử dụng lại.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Một công cụ hỗ trợ việc thiết kế giao diện người dùng.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Một phương pháp kiểm thử phần mềm cụ thể.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 336,
    content: 'Mẫu Singleton là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Một mẫu thiết kế đảm bảo rằng một lớp chỉ có một thể hiện duy nhất và cung cấp một điểm truy cập toàn cục đến thể hiện đó.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content:
          'Một mẫu thiết kế để tạo ra các đối tượng phức tạp một cách từng bước.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content:
          'Một mẫu thiết kế để định nghĩa một giao diện cho việc tạo ra các đối tượng, nhưng để lớp con quyết định lớp nào sẽ được khởi tạo.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content:
          'Một mẫu thiết kế để đóng gói một yêu cầu như một đối tượng, cho phép tham số hóa các client với các yêu cầu khác nhau.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 337,
    content: 'Mẫu Factory là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Một mẫu thiết kế để tạo ra các đối tượng mà không cần chỉ định lớp chính xác của đối tượng sẽ được tạo.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content:
          'Một mẫu thiết kế để kết hợp các đối tượng thành cấu trúc cây để biểu diễn các hệ thống phân cấp toàn bộ-bộ phận.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content:
          'Một mẫu thiết kế để định nghĩa một họ các thuật toán, đóng gói từng thuật toán và làm cho chúng có thể hoán đổi cho nhau.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content:
          'Một mẫu thiết kế để thêm trách nhiệm cho một đối tượng một cách động.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 338,
    content: 'Tái cấu trúc mã (Code Refactoring) là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Quá trình sửa đổi mã nguồn mà không thay đổi hành vi bên ngoài của nó, nhằm cải thiện cấu trúc, tính dễ đọc và khả năng bảo trì.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Viết lại toàn bộ mã nguồn của một phần mềm.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Tìm và sửa các lỗi trong mã nguồn.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Tối ưu hóa hiệu suất của mã nguồn.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 339,
    content: 'Nợ kỹ thuật (Technical Debt) là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Hậu quả của việc đưa ra các quyết định thiết kế hoặc mã hóa không tối ưu trong ngắn hạn, dẫn đến chi phí bảo trì và phát triển cao hơn trong tương lai.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Số lượng lỗi còn tồn tại trong phần mềm.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content:
          'Sự chậm trễ trong việc hoàn thành các tính năng của phần mềm.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Chi phí để nâng cấp phần cứng và phần mềm.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 340,
    content:
      'Quản lý cấu hình phần mềm (Software Configuration Management) là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Quá trình quản lý và kiểm soát các thay đổi đối với phần mềm trong suốt vòng đời phát triển.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Việc quản lý cơ sở dữ liệu của phần mềm.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Việc quản lý tài liệu của dự án phần mềm.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Việc quản lý đội ngũ phát triển phần mềm.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 341,
    content:
      'Hệ thống kiểm soát phiên bản (Version Control System) được sử dụng để làm gì?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content:
          'Theo dõi và quản lý các thay đổi của mã nguồn theo thời gian.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Biên dịch mã nguồn thành chương trình thực thi.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Kiểm thử chất lượng của mã nguồn.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Triển khai phần mềm lên môi trường sản xuất.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 342,
    content: 'Git là một ví dụ của hệ thống kiểm soát phiên bản nào?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content:
          'Hệ thống kiểm soát phiên bản phân tán (Distributed Version Control System).',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content:
          'Hệ thống kiểm soát phiên bản tập trung (Centralized Version Control System).',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Hệ thống quản lý cơ sở dữ liệu.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Công cụ quản lý dự án.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 343,
    content: 'Branching và Merging trong Git được sử dụng để làm gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Quản lý các dòng phát triển song song và tích hợp các thay đổi.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Lưu trữ lịch sử thay đổi của mã nguồn.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Chia sẻ mã nguồn với các thành viên trong nhóm.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Theo dõi các lỗi và vấn đề của dự án.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 344,
    content:
      'CI/CD (Continuous Integration/Continuous Delivery hoặc Continuous Deployment) là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Một tập hợp các thực hành tự động hóa quá trình tích hợp, kiểm thử và triển khai phần mềm.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content:
          'Một phương pháp quản lý dự án phần mềm theo từng giai đoạn nhỏ.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Một kỹ thuật kiểm thử phần mềm tự động.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Một kiến trúc phần mềm dựa trên các dịch vụ nhỏ.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 345,
    content: 'Kiểm thử đơn vị (Unit Testing) là gì?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content:
          'Kiểm thử các thành phần nhỏ nhất của phần mềm (ví dụ: hàm, phương thức).',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Kiểm thử sự tương tác giữa các thành phần của phần mềm.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Kiểm thử toàn bộ hệ thống phần mềm.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Kiểm thử giao diện người dùng của phần mềm.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 346,
    content: 'Kiểm thử tích hợp (Integration Testing) là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Kiểm thử sự tương tác giữa các thành phần đã được kiểm thử đơn vị.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Kiểm thử từng thành phần nhỏ nhất của phần mềm.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Kiểm thử hiệu suất của toàn bộ hệ thống.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Kiểm thử khả năng sử dụng của phần mềm bởi người dùng cuối.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 347,
    content: 'Kiểm thử hệ thống (System Testing) là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Kiểm thử toàn bộ hệ thống phần mềm đã tích hợp để đảm bảo nó đáp ứng các yêu cầu đã đặt ra.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Kiểm thử từng module riêng lẻ của phần mềm.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Kiểm thử khả năng chịu tải và độ ổn định của hệ thống.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Kiểm thử giao diện người dùng và trải nghiệm người dùng.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 348,
    content:
      'Kiểm thử chấp nhận người dùng (User Acceptance Testing - UAT) là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Kiểm thử được thực hiện bởi người dùng cuối để xác nhận rằng phần mềm đáp ứng nhu cầu và mong đợi của họ.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content:
          'Kiểm thử được thực hiện bởi đội ngũ phát triển để đảm bảo chất lượng mã nguồn.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Kiểm thử hiệu suất của hệ thống trong môi trường thực tế.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Kiểm thử tính bảo mật của ứng dụng.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 349,
    content:
      'Chất lượng phần mềm (Software Quality) được đánh giá dựa trên những yếu tố nào?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Tính đúng đắn, độ tin cậy, hiệu suất, khả năng sử dụng, khả năng bảo trì, tính di động, bảo mật.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Số lượng dòng code, tốc độ phát triển, chi phí dự án.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content:
          'Mức độ phức tạp của thuật toán, số lượng lập trình viên tham gia.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Thiết kế giao diện đẹp mắt, tài liệu đầy đủ.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 350,
    content: 'Đo lường phần mềm (Software Metrics) được sử dụng để làm gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Định lượng các khía cạnh khác nhau của quy trình phát triển phần mềm và sản phẩm phần mềm để theo dõi, đánh giá và cải thiện.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Tự động hóa quá trình kiểm thử phần mềm.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Quản lý cấu hình của phần mềm.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Lập kế hoạch cho các dự án phần mềm.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
];

const questionData8: Partial<Question>[] = [
  {
    id: 351,
    content: 'Mục tiêu chính của giai đoạn phân tích hệ thống thông tin là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Hiểu rõ vấn đề nghiệp vụ và xác định các yêu cầu của hệ thống mới.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Xây dựng mô hình dữ liệu cho hệ thống.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Thiết kế giao diện người dùng cho hệ thống.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Viết mã chương trình cho hệ thống.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 352,
    content:
      'Các kỹ thuật thu thập yêu cầu phổ biến trong phân tích hệ thống thông tin bao gồm:',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Phỏng vấn, khảo sát, quan sát, phân tích tài liệu, brainstorming.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Lập trình cặp, kiểm thử đơn vị, tái cấu trúc mã.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Phân tích SWOT, mô hình 5 lực lượng Porter, chuỗi giá trị.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'UML, ERD, DFD.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 353,
    content:
      'Phân tích SWOT thường được sử dụng trong giai đoạn nào của phân tích hệ thống thông tin?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Phân tích nghiệp vụ và xác định cơ hội/thách thức.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Thu thập yêu cầu người dùng.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Mô hình hóa quy trình nghiệp vụ.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Đánh giá các giải pháp tiềm năng.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 354,
    content:
      'Biểu đồ luồng dữ liệu (Data Flow Diagram - DFD) được sử dụng để mô hình hóa điều gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Luồng di chuyển của dữ liệu qua hệ thống và các xử lý liên quan.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Cấu trúc dữ liệu và mối quan hệ giữa các thực thể.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Các tương tác giữa người dùng và hệ thống theo thời gian.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Cấu trúc tĩnh của các thành phần trong hệ thống.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 355,
    content:
      'Biểu đồ quan hệ thực thể (Entity-Relationship Diagram - ERD) được sử dụng để mô hình hóa điều gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Cấu trúc dữ liệu và mối quan hệ giữa các thực thể trong hệ thống.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Luồng di chuyển của dữ liệu qua hệ thống.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Các quy trình nghiệp vụ trong hệ thống.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Giao diện người dùng của hệ thống.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 356,
    content: 'Mục tiêu chính của giai đoạn thiết kế hệ thống thông tin là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Xây dựng một bản thiết kế chi tiết cho hệ thống mới dựa trên các yêu cầu đã xác định.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Thu thập thông tin từ người dùng về nhu cầu của họ.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Kiểm thử chức năng của hệ thống đã được xây dựng.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Triển khai hệ thống vào môi trường làm việc thực tế.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 357,
    content:
      'Thiết kế kiến trúc hệ thống thông tin bao gồm những khía cạnh nào?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Lựa chọn mô hình kiến trúc (ví dụ: client-server, microservices), xác định các thành phần và mối quan hệ giữa chúng.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Thiết kế giao diện người dùng và trải nghiệm người dùng.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Xây dựng mô hình dữ liệu logic và vật lý.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Lựa chọn ngôn ngữ lập trình và công nghệ phát triển.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 358,
    content:
      'Thiết kế giao diện người dùng (User Interface - UI) tập trung vào điều gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Cách người dùng tương tác với hệ thống, đảm bảo tính trực quan, dễ sử dụng và hiệu quả.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Cách dữ liệu được lưu trữ và quản lý trong hệ thống.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Cấu trúc bên trong và các thành phần của hệ thống.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Hiệu suất và khả năng mở rộng của hệ thống.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 359,
    content:
      'Thiết kế trải nghiệm người dùng (User Experience - UX) tập trung vào điều gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Cảm xúc, thái độ và phản ứng của người dùng khi tương tác với hệ thống, đảm bảo sự hài lòng và hiệu quả.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Giao diện trực quan và dễ sử dụng của hệ thống.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Cấu trúc logic và chức năng của hệ thống.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Bảo mật và tính ổn định của hệ thống.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 360,
    content: 'Mô hình hóa dữ liệu logic tập trung vào điều gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Xác định các thực thể, thuộc tính và mối quan hệ giữa chúng mà không quan tâm đến cách chúng được lưu trữ vật lý.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content:
          'Xác định cấu trúc bảng, kiểu dữ liệu và khóa chính/khóa ngoại trong cơ sở dữ liệu.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content:
          'Mô tả luồng di chuyển của dữ liệu qua các quy trình nghiệp vụ.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content:
          'Thiết kế giao diện mà người dùng sẽ sử dụng để tương tác với dữ liệu.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 361,
    content: 'Mô hình hóa dữ liệu vật lý tập trung vào điều gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Xác định cách dữ liệu sẽ được lưu trữ và tổ chức thực tế trong cơ sở dữ liệu (ví dụ: cấu trúc bảng, kiểu dữ liệu, khóa).',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content:
          'Xác định các thực thể và mối quan hệ giữa chúng ở mức khái niệm.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Mô tả các chức năng và hành vi của hệ thống.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Thiết kế kiến trúc tổng thể của hệ thống.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 362,
    content:
      "Nguyên tắc DRY (Don't Repeat Yourself) trong thiết kế hệ thống thông tin có nghĩa là gì?",
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Tránh trùng lặp thông tin hoặc logic trong hệ thống.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Thiết kế hệ thống đơn giản nhất có thể.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Tối ưu hóa hiệu suất của hệ thống.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Tài liệu hóa mọi khía cạnh của hệ thống.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 363,
    content:
      'Nguyên tắc KISS (Keep It Simple, Stupid) trong thiết kế hệ thống thông tin có nghĩa là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Thiết kế hệ thống càng đơn giản càng tốt.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Không lặp lại mã hoặc thông tin.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Tập trung vào yêu cầu của người dùng.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Sử dụng các công nghệ mới nhất.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 364,
    content:
      'Mô hình hóa quy trình nghiệp vụ (Business Process Modeling) nhằm mục đích gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Hiểu rõ cách thức hoạt động hiện tại của tổ chức và xác định các điểm cần cải thiện.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Thiết kế giao diện người dùng thân thiện.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Xây dựng cơ sở dữ liệu hiệu quả.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Lựa chọn công nghệ phù hợp cho hệ thống.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 365,
    content:
      'Use Case Diagram trong UML được sử dụng để mô hình hóa điều gì trong phân tích hệ thống?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Tương tác giữa người dùng (actors) và hệ thống để đạt được các mục tiêu cụ thể.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Cấu trúc tĩnh của các lớp và mối quan hệ giữa chúng.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content:
          'Luồng điều khiển và trình tự các hoạt động trong một quy trình.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Sự thay đổi trạng thái của các đối tượng trong hệ thống.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 366,
    content:
      'Activity Diagram trong UML được sử dụng để mô hình hóa điều gì trong phân tích hệ thống?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Luồng điều khiển và trình tự các hoạt động trong một quy trình nghiệp vụ hoặc use case.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Tương tác giữa người dùng và hệ thống.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Cấu trúc dữ liệu của hệ thống.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Kiến trúc phần mềm của hệ thống.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 367,
    content:
      'State Machine Diagram trong UML được sử dụng để mô hình hóa điều gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Các trạng thái khác nhau mà một đối tượng có thể trải qua và các sự kiện gây ra sự chuyển đổi giữa các trạng thái đó.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Luồng dữ liệu trong hệ thống.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Các mối quan hệ giữa các lớp trong hệ thống.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Việc triển khai các thành phần phần mềm trên phần cứng.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 368,
    content: 'Component Diagram trong UML được sử dụng để mô hình hóa điều gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Cấu trúc tĩnh của các thành phần phần mềm và các giao diện mà chúng cung cấp và yêu cầu.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Tương tác giữa các đối tượng theo thời gian.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Luồng điều khiển trong một quy trình.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Mô hình dữ liệu của hệ thống.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 369,
    content:
      'Deployment Diagram trong UML được sử dụng để mô hình hóa điều gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Việc triển khai các thành phần phần mềm trên các nút phần cứng.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Cấu trúc logic của cơ sở dữ liệu.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Giao diện người dùng của ứng dụng.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Quy trình nghiệp vụ của tổ chức.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 370,
    content:
      'CASE Tools (Computer-Aided Software Engineering) được sử dụng để làm gì trong phân tích và thiết kế hệ thống?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Hỗ trợ các nhà phân tích và thiết kế trong việc tạo, quản lý và duy trì các mô hình và tài liệu của hệ thống.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Tự động hóa quá trình viết mã chương trình.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Thực hiện kiểm thử tự động cho hệ thống.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Quản lý dự án phát triển phần mềm.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 371,
    content:
      'Nguyên mẫu (Prototype) được sử dụng để làm gì trong phân tích và thiết kế hệ thống?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Làm rõ yêu cầu của người dùng, khám phá các tùy chọn thiết kế và thu thập phản hồi sớm.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Thay thế cho hệ thống cuối cùng.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Tài liệu hóa chi tiết hệ thống.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Tối ưu hóa hiệu suất của hệ thống.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 372,
    content:
      'Phân tích tính khả thi (Feasibility Analysis) bao gồm những khía cạnh nào?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Tính khả thi về kỹ thuật, kinh tế, pháp lý, hoạt động và thời gian.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Phân tích SWOT và PESTEL.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Mô hình hóa dữ liệu và quy trình.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Thiết kế giao diện người dùng và cơ sở dữ liệu.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 373,
    content:
      'Phân tích chi phí - lợi ích (Cost-Benefit Analysis) được sử dụng để làm gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Đánh giá các chi phí và lợi ích tiềm năng của một dự án hệ thống thông tin để đưa ra quyết định đầu tư.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Xác định các yêu cầu chức năng của hệ thống.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Thiết kế kiến trúc kỹ thuật của hệ thống.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Lập kế hoạch triển khai hệ thống.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 374,
    content:
      'Phân tích rủi ro (Risk Analysis) trong dự án hệ thống thông tin nhằm mục đích gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Xác định, đánh giá và đưa ra các biện pháp giảm thiểu các rủi ro tiềm ẩn có thể ảnh hưởng đến dự án.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Xác định các bên liên quan của dự án.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Lập kế hoạch quản lý thay đổi cho dự án.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Đảm bảo chất lượng của hệ thống sau khi triển khai.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 375,
    content:
      'Quản lý phạm vi dự án (Project Scope Management) trong phân tích và thiết kế hệ thống là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Xác định và kiểm soát những gì được bao gồm và không được bao gồm trong dự án.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Quản lý thời gian và tiến độ của dự án.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Quản lý chi phí và ngân sách của dự án.',
        is_correct: false,
        order_index: 4,
      },
      {
        id: 4,
        content: 'Quản lý giao tiếp giữa các thành viên trong dự án.',
        is_correct: false,
        order_index: 3,
      },
    ] as Answer[],
  },
  {
    id: 376,
    content:
      'Phân tích các bên liên quan (Stakeholder Analysis) nhằm mục đích gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Xác định những cá nhân hoặc tổ chức có lợi ích hoặc bị ảnh hưởng bởi dự án.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Xác định các yêu cầu chức năng của hệ thống.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Thiết kế kiến trúc cơ sở dữ liệu.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Lập kế hoạch kiểm thử hệ thống.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 377,
    content:
      'Ma trận RACI (Responsible, Accountable, Consulted, Informed) được sử dụng để làm gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Xác định vai trò và trách nhiệm của các bên liên quan trong các hoạt động của dự án.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Phân tích rủi ro của dự án.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Lập kế hoạch truyền thông cho dự án.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Quản lý sự thay đổi trong dự án.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 378,
    content: 'Giao diện dòng lệnh (Command-Line Interface - CLI) là gì?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content:
          'Một loại giao diện người dùng cho phép người dùng tương tác với hệ thống bằng cách nhập các lệnh văn bản.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Một loại kiến trúc phần mềm.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Một mô hình cơ sở dữ liệu.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Một ngôn ngữ lập trình.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 379,
    content:
      'Giao diện đồ họa người dùng (Graphical User Interface - GUI) là gì?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content:
          'Một loại giao diện người dùng cho phép người dùng tương tác với hệ thống bằng cách sử dụng các biểu tượng, menu và các thành phần đồ họa khác.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Một phương pháp quản lý dự án.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Một kỹ thuật kiểm thử phần mềm.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Một loại cơ sở dữ liệu.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 380,
    content: 'Khả năng mở rộng (Scalability) của hệ thống thông tin là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Khả năng của hệ thống để xử lý lượng công việc ngày càng tăng hoặc mở rộng quy mô để đáp ứng nhu cầu phát triển.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Khả năng của hệ thống để hoạt động liên tục mà không bị lỗi.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Khả năng của hệ thống để dễ dàng được người dùng sử dụng.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content:
          'Khả năng của hệ thống để bảo vệ dữ liệu khỏi truy cập trái phép.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 381,
    content: 'Tính khả dụng (Availability) của hệ thống thông tin là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Khả năng của hệ thống để hoạt động và có thể truy cập được bởi người dùng khi cần.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Khả năng của hệ thống để mở rộng quy mô khi cần thiết.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Khả năng của hệ thống để bảo vệ dữ liệu.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Khả năng của hệ thống để dễ dàng bảo trì và nâng cấp.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 382,
    content: 'Tính bảo mật (Security) của hệ thống thông tin là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Khả năng của hệ thống để bảo vệ dữ liệu và chức năng khỏi truy cập, sử dụng, tiết lộ, gián đoạn, sửa đổi hoặc phá hủy trái phép.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content:
          'Khả năng của hệ thống để đáp ứng nhanh chóng các yêu cầu của người dùng.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Khả năng của hệ thống để tích hợp với các hệ thống khác.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content:
          'Khả năng của hệ thống để dễ dàng tùy chỉnh theo nhu cầu của người dùng.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 383,
    content: 'Tính toàn vẹn dữ liệu (Data Integrity) là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Đảm bảo tính chính xác, nhất quán và đáng tin cậy của dữ liệu trong suốt vòng đời của nó.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Khả năng truy cập dữ liệu nhanh chóng và hiệu quả.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Khả năng lưu trữ lượng lớn dữ liệu.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Khả năng phục hồi dữ liệu sau sự cố.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 384,
    content: 'Thiết kế hướng đối tượng (Object-Oriented Design - OOD) là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Một phương pháp thiết kế phần mềm dựa trên khái niệm về các đối tượng, có thuộc tính và hành vi.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content:
          'Một phương pháp thiết kế tập trung vào các chức năng của hệ thống.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Một phương pháp thiết kế dựa trên luồng dữ liệu.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Một phương pháp thiết kế dựa trên cấu trúc dữ liệu.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 385,
    content: 'Phân tích cấu trúc (Structured Analysis) là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Một phương pháp phân tích hệ thống tập trung vào luồng dữ liệu và các quy trình xử lý.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content:
          'Một phương pháp phân tích dựa trên các đối tượng và tương tác giữa chúng.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content:
          'Một phương pháp phân tích tập trung vào yêu cầu của người dùng.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Một phương pháp phân tích dựa trên kiến trúc của hệ thống.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 386,
    content: 'Thiết kế cấu trúc (Structured Design) là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Một phương pháp thiết kế phần mềm tập trung vào việc chia hệ thống thành các module có cấu trúc rõ ràng và mối quan hệ đơn giản.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Một phương pháp thiết kế dựa trên các đối tượng và lớp.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Một phương pháp thiết kế tập trung vào giao diện người dùng.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Một phương pháp thiết kế dựa trên cơ sở dữ liệu.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 387,
    content: 'Coupling (Độ liên kết) trong thiết kế phần mềm là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Mức độ phụ thuộc lẫn nhau giữa các module trong hệ thống.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Mức độ gắn kết của các phần tử bên trong một module.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Số lượng dòng code trong một module.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Tốc độ thực thi của một module.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 388,
    content: 'Cohesion (Độ gắn kết) trong thiết kế phần mềm là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Mức độ mà các phần tử bên trong một module thuộc về nhau và cùng thực hiện một chức năng rõ ràng.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Mức độ phụ thuộc giữa các module trong hệ thống.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Sự phức tạp của logic bên trong một module.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Khả năng tái sử dụng của một module.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 389,
    content:
      'Chuẩn hóa cơ sở dữ liệu (Database Normalization) nhằm mục đích gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Giảm thiểu sự dư thừa dữ liệu và cải thiện tính toàn vẹn dữ liệu.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Tăng tốc độ truy vấn dữ liệu.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Đơn giản hóa cấu trúc cơ sở dữ liệu.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Bảo vệ dữ liệu khỏi truy cập trái phép.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 390,
    content: 'Các dạng chuẩn hóa cơ sở dữ liệu phổ biến bao gồm:',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: '1NF, 2NF, 3NF, BCNF.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'ERD, DFD, UML.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'SQL, NoSQL.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'CRUD, REST.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 391,
    content:
      'Mô hình hóa quy trình nghiệp vụ BPMN (Business Process Model and Notation) là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Một ký hiệu đồ họa tiêu chuẩn để mô tả các quy trình nghiệp vụ.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Một ngôn ngữ truy vấn cơ sở dữ liệu.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Một phương pháp quản lý dự án.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Một công cụ thiết kế giao diện người dùng.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 392,
    content: 'Phân tích khoảng cách (Gap Analysis) được sử dụng để làm gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Xác định sự khác biệt giữa trạng thái hiện tại và trạng thái mong muốn của một tổ chức hoặc hệ thống.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Phân tích các yêu cầu chức năng của hệ thống.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Thiết kế kiến trúc tổng thể của hệ thống.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Đánh giá hiệu suất của hệ thống sau khi triển khai.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 393,
    content: 'Phân tích PESTEL là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Một khung phân tích các yếu tố chính trị, kinh tế, xã hội, công nghệ, môi trường và pháp lý có thể ảnh hưởng đến một tổ chức hoặc dự án.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Một kỹ thuật thu thập yêu cầu người dùng.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Một phương pháp mô hình hóa dữ liệu.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Một công cụ quản lý rủi ro dự án.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 394,
    content: 'Mô hình 5 lực lượng Porter được sử dụng để làm gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Phân tích tính cạnh tranh trong một ngành.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Phân tích các yếu tố vĩ mô ảnh hưởng đến tổ chức.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Mô hình hóa chuỗi giá trị của tổ chức.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Xác định các bên liên quan của dự án.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 395,
    content:
      'Phân tích chuỗi giá trị (Value Chain Analysis) được sử dụng để làm gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Phân tích các hoạt động chính và hỗ trợ mà một tổ chức thực hiện để tạo ra giá trị cho khách hàng.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Đánh giá mức độ cạnh tranh trong ngành.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Phân tích các yếu tố bên ngoài ảnh hưởng đến tổ chức.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Xác định các rủi ro tiềm ẩn của dự án.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 396,
    content: 'Yêu cầu nghiệp vụ (Business Requirement) mô tả điều gì?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content:
          'Nhu cầu và mục tiêu của tổ chức mà hệ thống thông tin cần đáp ứng.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Cách người dùng sẽ tương tác với hệ thống.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Cách dữ liệu sẽ được lưu trữ trong hệ thống.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Kiến trúc kỹ thuật của hệ thống.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 397,
    content: 'Yêu cầu hệ thống (System Requirement) mô tả điều gì?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content:
          'Các chức năng, hiệu suất và các thuộc tính khác mà hệ thống thông tin phải có để đáp ứng yêu cầu nghiệp vụ.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Mục tiêu kinh doanh mà hệ thống cần đạt được.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Giao diện người dùng của hệ thống.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Cấu trúc cơ sở dữ liệu của hệ thống.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 398,
    content: 'Phân tích chi phí vòng đời (Life Cycle Cost Analysis) là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Đánh giá tổng chi phí của một hệ thống thông tin trong suốt vòng đời của nó, từ giai đoạn lên kế hoạch đến khi ngừng sử dụng.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Phân tích lợi ích mà hệ thống mang lại cho tổ chức.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'So sánh chi phí của các giải pháp hệ thống khác nhau.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Dự đoán chi phí bảo trì hệ thống.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 399,
    content:
      'Đánh giá sau triển khai (Post-Implementation Review) nhằm mục đích gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Đánh giá hiệu quả của hệ thống đã triển khai, xác định các bài học kinh nghiệm và đề xuất cải tiến.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Đào tạo người dùng cuối về cách sử dụng hệ thống.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Khắc phục các lỗi phát sinh sau khi triển khai.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Lập kế hoạch cho các nâng cấp hệ thống trong tương lai.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 400,
    content: 'Tài liệu hóa hệ thống (System Documentation) có vai trò gì?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content:
          'Cung cấp thông tin chi tiết về hệ thống cho các bên liên quan, hỗ trợ việc phát triển, bảo trì và nâng cấp hệ thống.',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Tự động hóa các quy trình nghiệp vụ.',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Bảo vệ hệ thống khỏi các mối đe dọa bảo mật.',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Tăng tốc độ xử lý của hệ thống.',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
];

const questionData9: Partial<Question>[] = [
  {
    id: 400,
    content: 'HTML là gì?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: 'Ngôn ngữ đánh dấu siêu văn bản',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Ngôn ngữ lập trình',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Phần mềm web',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Hệ quản trị cơ sở dữ liệu',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 401,
    content: 'CSS dùng để làm gì?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: 'Định dạng giao diện người dùng',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Tạo cơ sở dữ liệu',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Lập trình logic',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Quản lý bảo mật',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 402,
    content: 'JavaScript là ngôn ngữ lập trình gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Ngôn ngữ lập trình phía client',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Ngôn ngữ lập trình phía server',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Ngôn ngữ đánh dấu văn bản',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Ngôn ngữ truy vấn cơ sở dữ liệu',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 403,
    content: 'Câu lệnh nào dùng để tạo một liên kết trong HTML?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: '<a>',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: '<link>',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: '<h1>',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: '<button>',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 404,
    content: 'CSS sử dụng thuộc tính nào để thay đổi màu nền?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'background-color',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'font-color',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'color',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'text-color',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 405,
    content: 'Thuộc tính nào trong CSS dùng để thay đổi font chữ?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: 'font-family',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'text-align',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'font-size',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'color',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 406,
    content: 'Câu lệnh nào dùng để định nghĩa một đoạn văn bản trong HTML?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: '<p>',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: '<div>',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: '<section>',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: '<article>',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 407,
    content: 'Thẻ HTML nào dùng để tạo một hình ảnh?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: '<img>',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: '<image>',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: '<picture>',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: '<src>',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 408,
    content: 'Thuộc tính nào dùng để tạo liên kết đến một tệp CSS trong HTML?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: 'link',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'style',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'href',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'rel',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 409,
    content: 'Câu lệnh nào được sử dụng để thay đổi màu chữ trong CSS?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'color',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'font-color',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'text-color',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'font-style',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 410,
    content: 'Thuộc tính CSS nào dùng để căn lề cho một phần tử?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: 'text-align',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'margin',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'padding',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'border',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 411,
    content: 'Trong JavaScript, từ khóa nào dùng để khai báo một biến?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: 'let',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'var',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'const',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'function',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 412,
    content: 'Câu lệnh nào trong JavaScript dùng để tạo một hàm?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'function',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'def',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'method',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'func',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 413,
    content: 'HTML5 hỗ trợ thẻ nào để tạo video?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: '<video>',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: '<media>',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: '<mov>',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: '<audio>',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 414,
    content: 'Câu lệnh nào dùng để tạo một bảng trong HTML?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: '<table>',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: '<tab>',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: '<grid>',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: '<list>',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 415,
    content: 'Để tạo một phần tử điều hướng, bạn sử dụng thẻ nào trong HTML?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: '<nav>',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: '<link>',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: '<header>',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: '<footer>',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 416,
    content:
      'HTML sử dụng thuộc tính nào để tạo liên kết tới một tệp JavaScript?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'src',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'href',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'rel',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'link',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 417,
    content:
      'Thuộc tính nào trong CSS dùng để điều chỉnh khoảng cách giữa các phần tử?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: 'margin',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'padding',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'border',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'font-size',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 418,
    content: 'Trong JavaScript, câu lệnh nào dùng để kiểm tra một điều kiện?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'if',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'else',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'switch',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'case',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 419,
    content: 'Thẻ nào trong HTML dùng để định nghĩa một liên kết?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: '<a>',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: '<link>',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: '<button>',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: '<div>',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 420,
    content: 'Thuộc tính nào trong CSS dùng để thay đổi kiểu chữ?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: 'font-family',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'font-weight',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'font-style',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'font-size',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 421,
    content: 'Câu lệnh nào trong CSS dùng để thay đổi độ rộng của một phần tử?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: 'width',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'height',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'size',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'length',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 422,
    content: 'Thẻ HTML nào được sử dụng để tạo một danh sách không thứ tự?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: '<ul>',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: '<ol>',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: '<li>',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: '<dl>',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 423,
    content:
      'Thuộc tính nào trong CSS giúp định vị một phần tử theo vị trí tuyệt đối?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'position',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'display',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'float',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'overflow',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 424,
    content: 'Trong JavaScript, làm thế nào để bạn khai báo một mảng?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: 'var arr = [];',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'var arr = ();',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'var arr = {};',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'var arr = array[];',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 425,
    content:
      'Câu lệnh nào trong JavaScript được sử dụng để kiểm tra giá trị không phải là số?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'isNaN()',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'parseInt()',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'parseFloat()',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'toString()',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 426,
    content: 'Thẻ nào trong HTML được sử dụng để tạo một ô nhập liệu?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: '<input>',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: '<textarea>',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: '<form>',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: '<button>',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 427,
    content: 'Trong HTML5, thẻ nào dùng để tạo một khung chứa video?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: '<video>',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: '<iframe>',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: '<audio>',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: '<embed>',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 428,
    content: 'Trong HTML, thẻ nào dùng để tạo một ô chọn?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: '<select>',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: '<input>',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: '<textarea>',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: '<button>',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 429,
    content: 'CSS có thể áp dụng cho những yếu tố nào trong trang web?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: 'Tất cả các yếu tố HTML',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Chỉ các thẻ <div>',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Chỉ các thẻ <p>',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Chỉ các thẻ <h1>',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 430,
    content: 'Trong JavaScript, làm thế nào để khai báo một hàm?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'function myFunction() {}',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'function: myFunction() {}',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'myFunction() {}',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'function = myFunction() {}',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 431,
    content: 'Câu lệnh nào trong HTML dùng để nhúng một tệp âm thanh?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: '<audio>',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: '<sound>',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: '<music>',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: '<media>',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 432,
    content:
      'Trong JavaScript, làm thế nào để truy cập một phần tử trong mảng?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'arr[index]',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'arr.get(index)',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'arr(index)',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'arr[index()]',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 433,
    content: 'Thẻ HTML nào dùng để chèn một hình ảnh vào trang web?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: '<img>',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: '<image>',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: '<picture>',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: '<photo>',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 434,
    content:
      'Câu lệnh nào trong JavaScript dùng để in một thông báo ra màn hình?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: 'console.log()',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'alert()',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'prompt()',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'write()',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 435,
    content: 'Câu lệnh nào trong CSS giúp thay đổi màu chữ?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: 'color',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'font-color',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'text-color',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'background-color',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 436,
    content: 'Thẻ HTML nào dùng để tạo một form nhập liệu?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: '<form>',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: '<input>',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: '<textarea>',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: '<button>',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 437,
    content: 'Thuộc tính nào trong CSS giúp căn chỉnh văn bản về giữa?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'text-align: center;',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'text-align: left;',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'align-text: center;',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'center-align: true;',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 438,
    content:
      'Trong JavaScript, làm thế nào để truy cập vào giá trị của một ô nhập liệu?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'document.getElementById("inputId").value',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'document.getElementById("inputId").text',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'document.querySelector("inputId").value',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'document.querySelector("inputId").innerHTML',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 439,
    content:
      'Trong CSS, thuộc tính nào dùng để thay đổi độ rộng đường viền của phần tử?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'border-width',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'border-style',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'border-color',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'border-radius',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 440,
    content: 'Thẻ HTML nào dùng để nhúng một video từ một tệp?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: '<video>',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: '<iframe>',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: '<embed>',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: '<object>',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 441,
    content: 'JavaScript có thể được nhúng vào đâu trong trang HTML?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: 'Trong thẻ <script>',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Trong thẻ <style>',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Trong thẻ <link>',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Trong thẻ <div>',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 442,
    content: 'Câu lệnh nào trong JavaScript dùng để tạo một vòng lặp?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'for',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'loop',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'while',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'repeat',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 443,
    content: 'Thẻ HTML nào được sử dụng để nhúng một tệp CSS vào trang web?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: '<link>',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: '<style>',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: '<script>',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: '<meta>',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 444,
    content:
      'Trong CSS, thuộc tính nào dùng để thay đổi độ trong suốt của phần tử?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'opacity',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'visibility',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'background',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'color',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 445,
    content: 'JavaScript được dùng chủ yếu để làm gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Tạo hiệu ứng động trên trang web',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Xử lý cơ sở dữ liệu',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Tạo bố cục trang web',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Thiết kế giao diện người dùng',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 446,
    content:
      'Thuộc tính nào trong CSS dùng để tạo hiệu ứng bo góc cho phần tử?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'border-radius',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'padding',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'margin',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'border-width',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 447,
    content:
      'Câu lệnh nào trong JavaScript giúp thay đổi nội dung của một phần tử?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'innerHTML',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'value',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'textContent',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'text',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 448,
    content:
      'Câu lệnh nào trong HTML dùng để tạo một danh sách không có thứ tự?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: '<ul>',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: '<ol>',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: '<li>',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: '<list>',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 449,
    content:
      'Trong JavaScript, hàm nào được dùng để chuyển một chuỗi thành chữ hoa?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: 'toUpperCase()',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'toLowerCase()',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'capitalize()',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'upperCase()',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
];

const questionData10: Partial<Question>[] = [
  {
    id: 1,
    content: 'Học máy (Machine Learning) là gì?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content:
          'Một phương pháp học của máy tính để làm nhiệm vụ mà không cần lập trình cụ thể',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Một công nghệ để xây dựng phần mềm',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Một cách để giải quyết các vấn đề đơn giản',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Một thuật toán để tạo website',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 2,
    content: 'Phương pháp học nào là phương pháp học chính trong Học máy?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Học có giám sát',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Học không giám sát',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Học tăng cường',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Học sâu',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 3,
    content: 'Thuật toán nào trong Học máy được sử dụng phổ biến nhất?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Thuật toán học hồi quy',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Thuật toán tìm kiếm nhị phân',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Thuật toán sắp xếp',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Thuật toán Quicksort',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 4,
    content: 'Kỹ thuật nào là phương pháp học không giám sát?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Phân cụm',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Học sâu',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Hồi quy tuyến tính',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Học có giám sát',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 5,
    content: 'Thuật toán nào trong học sâu giúp phát hiện đối tượng trong ảnh?',
    difficulty_level: 'hard',
    answers: [
      {
        id: 1,
        content: 'Convolutional Neural Networks (CNN)',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Recurrent Neural Networks (RNN)',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Support Vector Machines (SVM)',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Decision Trees',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 6,
    content: 'Học máy có thể giúp giải quyết vấn đề nào dưới đây?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: 'Dự đoán giá trị thị trường chứng khoán',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Tạo ra các sản phẩm vật lý',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Dự báo thời tiết chính xác 100%',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Tạo ra các bộ phim hoạt hình',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 7,
    content: 'Thuật toán học máy nào dùng để phân loại dữ liệu?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Decision Trees',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'K-means clustering',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Principal Component Analysis',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Linear Regression',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 8,
    content: 'Học máy có thể áp dụng trong lĩnh vực nào dưới đây?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: 'Phân tích dữ liệu y tế',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Viết phần mềm cơ bản',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Chạy các ứng dụng di động',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Tạo phần mềm trò chơi',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 9,
    content: 'Phân cụm trong học máy là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Chia dữ liệu thành các nhóm giống nhau',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Dự đoán giá trị của biến đầu ra',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Cải thiện chất lượng dữ liệu đầu vào',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Tạo các mô hình dự đoán',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 10,
    content: 'Thuật toán hồi quy trong học máy dùng để làm gì?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: 'Dự đoán một giá trị liên tục',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Phân loại dữ liệu vào các nhóm',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Tìm kiếm trong cơ sở dữ liệu',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Phân tích các đặc điểm dữ liệu',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 11,
    content:
      'Học sâu (Deep Learning) là một phần của học máy, đặc biệt có khả năng xử lý gì?',
    difficulty_level: 'hard',
    answers: [
      {
        id: 1,
        content: 'Xử lý các dữ liệu phức tạp như hình ảnh và âm thanh',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Tạo ra các chiến lược kinh doanh',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Tối ưu hóa thuật toán tìm kiếm',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Dự đoán dữ liệu tài chính',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 12,
    content: 'Thuật toán nào dưới đây được dùng trong học máy để phân loại?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'SVM (Support Vector Machine)',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'K-means',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'PCA (Principal Component Analysis)',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Hàm Sigmoid',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 13,
    content:
      'Thuật toán nào giúp mô hình học máy học tốt hơn qua các ví dụ mà không cần can thiệp nhiều?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Học không giám sát',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Học có giám sát',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Học tăng cường',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Học sâu',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 14,
    content: 'Thuật toán nào trong học máy sử dụng để tối ưu hóa mô hình?',
    difficulty_level: 'hard',
    answers: [
      {
        id: 1,
        content: 'Gradient Descent',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Support Vector Machine',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'K-means clustering',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Decision Trees',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 15,
    content: 'Thuật toán nào trong học máy giúp nhận dạng giọng nói?',
    difficulty_level: 'hard',
    answers: [
      {
        id: 1,
        content: 'Recurrent Neural Networks (RNN)',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Convolutional Neural Networks (CNN)',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Linear Regression',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'K-means',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 16,
    content: 'Thuật toán học máy nào giúp phân tích dữ liệu chuỗi thời gian?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Recurrent Neural Networks (RNN)',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Decision Trees',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Convolutional Neural Networks (CNN)',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'K-nearest neighbors (KNN)',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 17,
    content: 'Trong học máy, "overfitting" có nghĩa là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content:
          'Mô hình học quá kỹ từ dữ liệu huấn luyện và không tổng quát được',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Mô hình chưa học được đủ từ dữ liệu huấn luyện',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Dữ liệu huấn luyện bị thiếu thông tin',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Mô hình có khả năng nhận diện mẫu tốt hơn',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 18,
    content:
      'Thuật toán học máy nào được dùng để phát hiện bất thường trong dữ liệu?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Anomaly Detection',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Linear Regression',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Decision Trees',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Clustering',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 19,
    content:
      'Kỹ thuật học máy nào giúp mô hình cải thiện thông qua các phản hồi từ hành động của nó?',
    difficulty_level: 'hard',
    answers: [
      {
        id: 1,
        content: 'Học tăng cường (Reinforcement Learning)',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Học có giám sát',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Học không giám sát',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Học sâu',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 20,
    content:
      'Thuật toán nào được sử dụng để phát hiện các đối tượng trong ảnh?',
    difficulty_level: 'hard',
    answers: [
      {
        id: 1,
        content: 'Convolutional Neural Networks (CNN)',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Support Vector Machines (SVM)',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Decision Trees',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Recurrent Neural Networks (RNN)',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 21,
    content: 'Trong học máy, "underfitting" có nghĩa là gì?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Mô hình không học được đủ từ dữ liệu huấn luyện',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Mô hình học quá kỹ và không tổng quát được',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content:
          'Mô hình có thể phân loại tốt nhưng không phân biệt được dữ liệu',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Dữ liệu bị nhiễu và không thể sử dụng được',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 22,
    content:
      'Trong học máy, phương pháp nào được sử dụng để giảm thiểu "overfitting"?',
    difficulty_level: 'hard',
    answers: [
      {
        id: 1,
        content: 'Regularization',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'K-means Clustering',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Linear Regression',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'PCA (Principal Component Analysis)',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 23,
    content: 'Học máy có thể giúp dự đoán điều gì dưới đây?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: 'Chỉ số tín dụng của khách hàng',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Ngày sinh của người dùng',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Màu sắc yêu thích của người dùng',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Sở thích của người dùng',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 24,
    content:
      'Kỹ thuật nào trong học máy giúp mô hình tự động tìm ra đặc trưng quan trọng từ dữ liệu?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Feature Engineering',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Data Normalization',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Ensemble Methods',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Data Augmentation',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 25,
    content:
      'Thuật toán học máy nào thường được sử dụng trong phân loại văn bản?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Naive Bayes',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Linear Regression',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'K-means Clustering',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Support Vector Machines (SVM)',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 26,
    content:
      'Thuật toán học máy nào sau đây không phải là thuật toán phân loại?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'K-means Clustering',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Logistic Regression',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Decision Trees',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Support Vector Machines (SVM)',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 27,
    content:
      'Thuật toán nào trong học máy giúp mô hình tự học mà không cần dữ liệu nhãn?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Học không giám sát',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Học có giám sát',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Học tăng cường',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Học sâu',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 28,
    content:
      'Thuật toán nào trong học máy sử dụng cây quyết định để phân loại và dự đoán?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Decision Trees',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'K-means Clustering',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Neural Networks',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Naive Bayes',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 29,
    content: 'Trong học máy, "bagging" là gì?',
    difficulty_level: 'hard',
    answers: [
      {
        id: 1,
        content:
          'Một kỹ thuật học máy giúp giảm phương sai của mô hình bằng cách kết hợp nhiều mô hình lại với nhau',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content:
          'Một thuật toán học máy giúp tăng cường khả năng nhận diện dữ liệu',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Một phương pháp huấn luyện nhanh các mô hình học sâu',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Một kỹ thuật lựa chọn đặc trưng trong học máy',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 30,
    content:
      'Thuật toán học máy nào giúp mô hình học từ dữ liệu dựa trên một tập các mẫu được phân loại sẵn?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Học có giám sát',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Học không giám sát',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Học sâu',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Học tăng cường',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 31,
    content:
      'Phương pháp nào trong học máy giúp giảm thiểu sự phức tạp của mô hình?',
    difficulty_level: 'hard',
    answers: [
      {
        id: 1,
        content: 'Regularization',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'K-means Clustering',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Gradient Descent',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Decision Trees',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 32,
    content:
      'Thuật toán nào trong học máy có thể giúp phân tích các dữ liệu có dạng chuỗi?',
    difficulty_level: 'hard',
    answers: [
      {
        id: 1,
        content: 'Recurrent Neural Networks (RNN)',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Support Vector Machines (SVM)',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Decision Trees',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Naive Bayes',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 33,
    content:
      'Phương pháp nào trong học máy giúp giảm thiểu nguy cơ overfitting?',
    difficulty_level: 'hard',
    answers: [
      {
        id: 1,
        content: 'Cross-validation',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Random Forests',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Gradient Boosting',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'K-means Clustering',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 34,
    content: 'Thuật toán nào dưới đây là phương pháp học sâu phổ biến?',
    difficulty_level: 'hard',
    answers: [
      {
        id: 1,
        content: 'Convolutional Neural Networks (CNN)',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Logistic Regression',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Linear Regression',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Naive Bayes',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 35,
    content:
      'Thuật toán nào trong học máy được sử dụng để dự đoán một giá trị liên tục?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Hồi quy tuyến tính',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'K-means Clustering',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Decision Trees',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Random Forests',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 36,
    content:
      'Thuật toán nào trong học máy giúp phân loại các văn bản thành các chủ đề?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Naive Bayes',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Support Vector Machines (SVM)',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'K-means Clustering',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Decision Trees',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 37,
    content:
      'Phương pháp học nào trong học máy liên quan đến việc dạy mô hình thông qua các quyết định đã biết?',
    difficulty_level: 'easy',
    answers: [
      {
        id: 1,
        content: 'Học có giám sát',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Học không giám sát',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Học tăng cường',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Học sâu',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 38,
    content:
      'Thuật toán nào trong học máy dùng để nhận diện các đặc trưng quan trọng trong dữ liệu?',
    difficulty_level: 'hard',
    answers: [
      {
        id: 1,
        content: 'Principal Component Analysis (PCA)',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Support Vector Machines (SVM)',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'K-means Clustering',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Neural Networks',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 39,
    content:
      'Thuật toán học máy nào dưới đây được sử dụng trong nhận diện hình ảnh?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Convolutional Neural Networks (CNN)',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Logistic Regression',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Support Vector Machines (SVM)',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Naive Bayes',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 40,
    content:
      'Thuật toán nào trong học máy sử dụng dữ liệu để cải thiện kết quả dự đoán của mình theo thời gian?',
    difficulty_level: 'hard',
    answers: [
      {
        id: 1,
        content: 'Học tăng cường',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Học có giám sát',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Học không giám sát',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Học sâu',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 41,
    content:
      'Mô hình học máy nào dưới đây giúp dự đoán giá trị dựa trên một tập hợp các yếu tố độc lập?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Hồi quy tuyến tính',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Hồi quy logistic',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'K-means Clustering',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Học sâu',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 42,
    content:
      'Thuật toán nào trong học máy giúp xác định mối quan hệ giữa các dữ liệu?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Hồi quy tuyến tính',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'K-nearest neighbors (KNN)',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Decision Trees',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Support Vector Machines (SVM)',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 43,
    content:
      'Trong học sâu, mạng nơ-ron nào giúp cải thiện việc xử lý chuỗi dữ liệu?',
    difficulty_level: 'hard',
    answers: [
      {
        id: 1,
        content: 'Recurrent Neural Networks (RNN)',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Convolutional Neural Networks (CNN)',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Long Short-Term Memory (LSTM)',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Generative Adversarial Networks (GANs)',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 44,
    content: 'Thuật toán nào trong học máy dùng để phân loại văn bản?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Naive Bayes',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Decision Trees',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Random Forests',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'K-means Clustering',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 45,
    content:
      'Phương pháp học nào dưới đây có thể sử dụng với dữ liệu không có nhãn?',
    difficulty_level: 'hard',
    answers: [
      {
        id: 1,
        content: 'Học không giám sát',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Học có giám sát',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Học sâu',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Học tăng cường',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 46,
    content:
      'Kỹ thuật nào dưới đây được sử dụng trong học sâu để ngăn ngừa overfitting?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Regularization',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Cross-validation',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Gradient Boosting',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Dropout',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 47,
    content:
      'Thuật toán nào dưới đây có thể xử lý vấn đề phân loại dữ liệu không đều?',
    difficulty_level: 'hard',
    answers: [
      {
        id: 1,
        content: 'Support Vector Machines (SVM)',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'K-means Clustering',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Naive Bayes',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Decision Trees',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 48,
    content:
      'Phương pháp nào dưới đây trong học máy được sử dụng để tìm các mẫu trong dữ liệu không có nhãn?',
    difficulty_level: 'medium',
    answers: [
      {
        id: 1,
        content: 'Phân cụm',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Học sâu',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Học có giám sát',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Học tăng cường',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 49,
    content:
      'Kỹ thuật nào dưới đây được sử dụng để giảm thiểu lỗi trong mô hình học máy?',
    difficulty_level: 'hard',
    answers: [
      {
        id: 1,
        content: 'Ensemble Learning',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Random Forests',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Naive Bayes',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'Học không giám sát',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
  {
    id: 50,
    content:
      'Thuật toán nào trong học máy thường được sử dụng để tối ưu hóa mô hình?',
    difficulty_level: 'hard',
    answers: [
      {
        id: 1,
        content: 'Gradient Descent',
        is_correct: true,
        order_index: 1,
      },
      {
        id: 2,
        content: 'Decision Trees',
        is_correct: false,
        order_index: 2,
      },
      {
        id: 3,
        content: 'Support Vector Machines (SVM)',
        is_correct: false,
        order_index: 3,
      },
      {
        id: 4,
        content: 'K-means Clustering',
        is_correct: false,
        order_index: 4,
      },
    ] as Answer[],
  },
];

export const listQuestionData = [
  {
    id: 1,
    item: questionData1,
  },
  {
    id: 2,
    item: questionData2,
  },
  {
    id: 3,
    item: questionData3,
  },
  {
    id: 4,
    item: questionData4,
  },
  {
    id: 5,
    item: questionData5,
  },
  {
    id: 6,
    item: questionData6,
  },
  {
    id: 7,
    item: questionData7,
  },
  {
    id: 8,
    item: questionData8,
  },
  {
    id: 9,
    item: questionData9,
  },
  {
    id: 10,
    item: questionData10,
  },
];
