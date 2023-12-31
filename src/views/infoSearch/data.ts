// 考试查询信息
const examData = [
  {
    selNumber: "(2022-2023-2)-0807316010-05303-1",
    courseName: "光电子学",
    name: "刘亚星",
    examDate: "第13周周3(2023-05-17)第3,4节",
    examAddress: "2302（多媒体）",
    examType: "",
    seatNumber: "47",
    examCampus: "江宁校区"
  },
  {
    selNumber: "(2022-2023-2)-0807516043-05128-1",
    courseName: "光通信技术",
    name: "刘亚星",
    examDate: "2023年06月30日(16:00-18:00)",
    examAddress: "2302（多媒体）",
    examType: "",
    seatNumber: "47",
    examCampus: "江宁校区"
  }
];
// 学年信息
const schoolYear = [
  {
    value: "all",
    label: "全部"
  },
  {
    value: "2020-2021",
    label: "2020-2021"
  },
  {
    value: "2021-2022",
    label: "2021-2022"
  },
  {
    value: "2022-2023",
    label: "2022-2023"
  }
];
// 学期信息
const term = [
  {
    value: "all",
    label: "全部"
  },
  {
    value: "1",
    label: "1"
  },
  {
    value: "2",
    label: "2"
  }
];
// 等级考试查询信息
const gradeData = [
  {
    schoolYear: "2020-2021",
    term: "2",
    gradeName: "英语四级",
    admissionNumber: "",
    date: "2021.06",
    score: "366",
    listenScore: "",
    readScore: "",
    writeScore: "",
    mixScore: ""
  },
  {
    schoolYear: "2020-2021",
    term: "2",
    gradeName: "全国二级MS Office",
    admissionNumber: "",
    date: "2021.03",
    score: "合格",
    listenScore: "",
    readScore: "",
    writeScore: "",
    mixScore: ""
  },
  {
    schoolYear: "2021-2022",
    term: "1",
    gradeName: "全国二级C",
    admissionNumber: "",
    date: "2021.12",
    score: "优秀",
    listenScore: "",
    readScore: "",
    writeScore: "",
    mixScore: ""
  },
  {
    schoolYear: "2021-2022",
    term: "2",
    gradeName: "英语四级",
    admissionNumber: "",
    date: "2021.12",
    score: "372",
    listenScore: "",
    readScore: "",
    writeScore: "",
    mixScore: ""
  },
  {
    schoolYear: "2022-2023",
    term: "1",
    gradeName: "英语四级",
    admissionNumber: "",
    date: "2022.09",
    score: "354",
    listenScore: "",
    readScore: "",
    writeScore: "",
    mixScore: ""
  },
  {
    schoolYear: "2022-2023",
    term: "2",
    gradeName: "英语四级",
    admissionNumber: "",
    date: "2022.12",
    score: "0",
    listenScore: "",
    readScore: "",
    writeScore: "",
    mixScore: ""
  }
];
// 选课信息
const courseSelData = [
  {
    selNumber: "(2022-2023-2)-0807316010-05303-1",
    courseNumber: "0807316010",
    courseName: "光电子学",
    courseType: "必修课",
    isSel: "否",
    teacherName: "杨慧珍",
    credit: "3",
    weekHour: "4.0-4.0",
    classTime: "周二第1,2节{第1-10周};周四第3,4节{第1-10周}",
    classLocation: "1406（多媒体）;1406（多媒体）",
    testBook: "1",
    isStudy: "",
    teachPlanUploadCount: "",
    teachPlanUploadTime: "",
    teachPlanUploadName: "未上传",
    teachPlanDownload: "下载"
  },
  {
    selNumber: "(2022-2023-2)-0807316010-05303-1B",
    courseNumber: "0807316010",
    courseName: "光电子学",
    courseType: "必修课",
    isSel: "否",
    teacherName: "杨慧珍",
    credit: "3",
    weekHour: "0.0-4.0",
    classTime:
      "周二第1,2节{第1-10周};周四第3,4节{第1-10周};周三第1,2节{第8-10周|双周};周三第3,4节{第8-10周|双周}",
    classLocation:
      "1406（多媒体）;1406（多媒体）;光源与显示实验室(科技楼4栋511);光源与显示实验室(科技楼4栋511)",
    testBook: "1",
    isStudy: "",
    teachPlanUploadCount: "",
    teachPlanUploadTime: "",
    teachPlanUploadName: "未上传",
    teachPlanDownload: "下载"
  },
  {
    selNumber: "(2022-2023-2)-0807916035-05057-2",
    courseNumber: "0807916035",
    courseName: "图像处理方法与软件",
    courseType: "必修课",
    isSel: "否",
    teacherName: "祁正青",
    credit: "3",
    weekHour: "0.0-4.0",
    classTime: "周一第5,6节{第1-12周};周一第7,8节{第1-12周}",
    classLocation:
      "移动通信实验室(科技楼4栋503-2);移动通信实验室(科技楼4栋503-2)",
    testBook: "1",
    isStudy: "",
    teachPlanUploadCount: "",
    teachPlanUploadTime: "",
    teachPlanUploadName: "未上传",
    teachPlanDownload: "下载"
  },
  {
    selNumber: "(2022-2023-2)-0807916068-03036-1",
    courseNumber: "0807916068",
    courseName: "光学图像处理课程设计",
    courseType: "集中性实践",
    isSel: "否",
    teacherName: "丁冬艳",
    credit: "1",
    weekHour: "0.0-10.",
    classTime:
      "周三第3,4节{第14-14周|双周};周四第1,2节{第14-14周|双周};周四第3,4节{第14-14周|双周};周四第5,6节{第14-14周|双周};周四第7,8,9节{第14-14周|双周};周五第1,2节{第14-14周|双周};周五第3,4节{第14-14周|双周};周五第5,6节{第14-14周|双周};周五第7,8,9节{第14-14周|双周}",
    classLocation:
      "移动通信实验室(科技楼4栋503-2);移动通信实验室(科技楼4栋503-2);移动通信实验室(科技楼4栋503-2);移动通信实验室(科技楼4栋503-2);移动通信实验室(科技楼4栋503-2);移动通信实验室(科技楼4栋503-2);移动通信实验室(科技楼4栋503-2);移动通信实验室(科技楼4栋503-2);移动通信实验室(科技楼4栋503-2)",
    testBook: "1",
    isStudy: "",
    teachPlanUploadCount: "",
    teachPlanUploadTime: "",
    teachPlanUploadName: "未上传",
    teachPlanDownload: "下载"
  },
  {
    selNumber: "(2022-2023-2)-0807916073-04918-1",
    courseNumber: "0807916073",
    courseName: "劳动",
    courseType: "集中性实践",
    isSel: "否",
    teacherName: "朱荣刚",
    credit: "2",
    weekHour: "+2",
    classTime: "",
    classLocation: "",
    testBook: "1",
    isStudy: "",
    teachPlanUploadCount: "",
    teachPlanUploadTime: "",
    teachPlanUploadName: "未上传",
    teachPlanDownload: "下载"
  },
  {
    selNumber: "(2022-2023-2)-0807916080-04918-1",
    courseNumber: "0807916080",
    courseName: "专业实习",
    courseType: "集中性实践",
    isSel: "否",
    teacherName: "朱荣刚",
    credit: "2",
    weekHour: "+2",
    classTime: "",
    classLocation: "",
    testBook: "1",
    isStudy: "",
    teachPlanUploadCount: "",
    teachPlanUploadTime: "",
    teachPlanUploadName: "未上传",
    teachPlanDownload: "下载"
  },
  {
    selNumber: "(2022-2023-2)-0807516043-05128-1A",
    courseNumber: "0807516043",
    courseName: "光通信技术",
    courseType: "任选课",
    isSel: "否",
    teacherName: "季珂",
    credit: "3",
    weekHour: "0.0-4.0",
    classTime:
      "周二第1,2节{第15-17周};周二第3,4节{第1-8周};周四第1,2节{第1-8周};周四第1,2节{第15-17周};周四第5,6节{第16-16周|双周};周四第7,8节{第16-16周|双周}",
    classLocation:
      "1406（多媒体）;1406（多媒体）;1406（多媒体）;1406（多媒体）;射频与光纤信号传播实验室(科技楼4栋623);射频与光纤信号传播实验室(科技楼4栋623)",
    testBook: "1",
    isStudy: "",
    teachPlanUploadCount: "",
    teachPlanUploadTime: "",
    teachPlanUploadName: "未上传",
    teachPlanDownload: "下载"
  },
  {
    selNumber: "(2022-2023-2)-0807516043-05128-1",
    courseNumber: "0807516043",
    courseName: "光通信技术",
    courseType: "任选课",
    isSel: "否",
    teacherName: "季珂",
    credit: "3",
    weekHour: "4.0-4.0",
    classTime:
      "周二第1,2节{第15-17周};周二第3,4节{第1-8周};周四第1,2节{第1-8周};周四第1,2节{第15-17周}",
    classLocation:
      "1406（多媒体）;1406（多媒体）;1406（多媒体）;1406（多媒体）",
    testBook: "1",
    isStudy: "",
    teachPlanUploadCount: "",
    teachPlanUploadTime: "",
    teachPlanUploadName: "未上传",
    teachPlanDownload: "下载"
  },
  {
    selNumber: "(2022-2023-2)-0807916078-04918-2",
    courseNumber: "0807916078",
    courseName: "光学设计",
    courseType: "限选课",
    isSel: "否",
    teacherName: "朱荣刚",
    credit: "3",
    weekHour: "0.0-4.0",
    classTime:
      "周五第1,2节{第7-12周};周五第3,4节{第7-12周};周五第5,6节{第7-12周};周五第7,8节{第7-12周}",
    classLocation:
      "移动通信实验室(科技楼4栋503-2);移动通信实验室(科技楼4栋503-2);移动通信实验室(科技楼4栋503-2);移动通信实验室(科技楼4栋503-2)",
    testBook: "1",
    isStudy: "",
    teachPlanUploadCount: "",
    teachPlanUploadTime: "",
    teachPlanUploadName: "未上传",
    teachPlanDownload: "下载"
  }
];
// 培养计划信息
const eduProgramData = [
  {
    courseNumber: "0807316010",
    courseName: "光电子学",
    credit: "3",
    weekHour: "4.0-2.0",
    examType: "",
    curriculum: "必修课",
    courseType: "专业必修课",
    studyTerm: "6",
    courseInfo: "查看介绍",
    isMinor: "",
    majorDirection: "无方向",
    groupNumber: "",
    moduleNumber: "",
    isPassed: "",
    startEndWeek: "01-20",
    isShortTerm: ""
  },
  {
    courseNumber: "0807515011",
    courseName: "DSP技术及应用",
    credit: "3.5",
    weekHour: "4.0-2.0",
    examType: "",
    curriculum: "任选课",
    courseType: "专业任选课",
    studyTerm: "6",
    courseInfo: "查看介绍",
    isMinor: "",
    majorDirection: "无方向",
    groupNumber: "",
    moduleNumber: "",
    isPassed: "",
    startEndWeek: "01-20",
    isShortTerm: ""
  },
  {
    courseNumber: "0807516030",
    courseName: "光谱技术及应用",
    credit: "2",
    weekHour: "2.0-0.0",
    examType: "",
    curriculum: "任选课",
    courseType: "专业任选课",
    studyTerm: "6",
    courseInfo: "查看介绍",
    isMinor: "",
    majorDirection: "无方向",
    groupNumber: "",
    moduleNumber: "",
    isPassed: "",
    startEndWeek: "01-20",
    isShortTerm: ""
  },
  {
    courseNumber: "0807516043",
    courseName: "光通信技术",
    credit: "3",
    weekHour: "4.0-2.0",
    examType: "",
    curriculum: "任选课",
    courseType: "专业任选课",
    studyTerm: "6",
    courseInfo: "查看介绍",
    isMinor: "",
    majorDirection: "无方向",
    groupNumber: "",
    moduleNumber: "",
    isPassed: "",
    startEndWeek: "01-20",
    isShortTerm: ""
  },
  {
    courseNumber: "0807916035",
    courseName: "图像处理方法与软件",
    credit: "3",
    weekHour: "0.0-2.0",
    examType: "",
    curriculum: "必修课",
    courseType: "实践教学环节",
    studyTerm: "6",
    courseInfo: "查看介绍",
    isMinor: "",
    majorDirection: "无方向",
    groupNumber: "",
    moduleNumber: "",
    isPassed: "",
    startEndWeek: "01-20",
    isShortTerm: ""
  },
  {
    courseNumber: "0807916068",
    courseName: "光学图像处理课程设计",
    credit: "1",
    weekHour: "0.0-10.",
    examType: "",
    curriculum: "集中性实践",
    courseType: "实践教学环节",
    studyTerm: "6",
    courseInfo: "查看介绍",
    isMinor: "",
    majorDirection: "无方向",
    groupNumber: "",
    moduleNumber: "",
    isPassed: "",
    startEndWeek: "14-14",
    isShortTerm: ""
  },
  {
    courseNumber: "0807316010",
    courseName: "光电子学",
    credit: "3",
    weekHour: "4.0-2.0",
    examType: "",
    curriculum: "必修课",
    courseType: "专业必修课",
    studyTerm: "6",
    courseInfo: "查看介绍",
    isMinor: "",
    majorDirection: "无方向",
    groupNumber: "",
    moduleNumber: "",
    isPassed: "",
    startEndWeek: "01-20",
    isShortTerm: ""
  },
  {
    courseNumber: "0807515011",
    courseName: "DSP技术及应用",
    credit: "3.5",
    weekHour: "4.0-2.0",
    examType: "",
    curriculum: "任选课",
    courseType: "专业任选课",
    studyTerm: "6",
    courseInfo: "查看介绍",
    isMinor: "",
    majorDirection: "无方向",
    groupNumber: "",
    moduleNumber: "",
    isPassed: "",
    startEndWeek: "01-20",
    isShortTerm: ""
  },
  {
    courseNumber: "0807516030",
    courseName: "光谱技术及应用",
    credit: "2",
    weekHour: "2.0-0.0",
    examType: "",
    curriculum: "任选课",
    courseType: "专业任选课",
    studyTerm: "6",
    courseInfo: "查看介绍",
    isMinor: "",
    majorDirection: "无方向",
    groupNumber: "",
    moduleNumber: "",
    isPassed: "",
    startEndWeek: "01-20",
    isShortTerm: ""
  },
  {
    courseNumber: "0807516043",
    courseName: "光通信技术",
    credit: "3",
    weekHour: "4.0-2.0",
    examType: "",
    curriculum: "任选课",
    courseType: "专业任选课",
    studyTerm: "6",
    courseInfo: "查看介绍",
    isMinor: "",
    majorDirection: "无方向",
    groupNumber: "",
    moduleNumber: "",
    isPassed: "",
    startEndWeek: "01-20",
    isShortTerm: ""
  },
  {
    courseNumber: "0807916035",
    courseName: "图像处理方法与软件",
    credit: "3",
    weekHour: "0.0-2.0",
    examType: "",
    curriculum: "必修课",
    courseType: "实践教学环节",
    studyTerm: "6",
    courseInfo: "查看介绍",
    isMinor: "",
    majorDirection: "无方向",
    groupNumber: "",
    moduleNumber: "",
    isPassed: "",
    startEndWeek: "01-20",
    isShortTerm: ""
  },
  {
    courseNumber: "0807916068",
    courseName: "光学图像处理课程设计",
    credit: "1",
    weekHour: "0.0-10.",
    examType: "",
    curriculum: "集中性实践",
    courseType: "实践教学环节",
    studyTerm: "6",
    courseInfo: "查看介绍",
    isMinor: "",
    majorDirection: "无方向",
    groupNumber: "",
    moduleNumber: "",
    isPassed: "",
    startEndWeek: "14-14",
    isShortTerm: ""
  }
];

// 成绩信息
const scoreData = [
  {
    schoolYear: "2020-2021",
    term: "1",
    courseNumber: "0809113015",
    courseName: "大学计算机信息技术",
    curriculum: "通识课程必修",
    courseOwner: "",
    credit: "3.5",
    gp: "3.50",
    score: "89",
    isMinor: "0",
    makeUpScore: "",
    reBuildScore: "",
    college: "计算机工程学院",
    notes: "",
    isReBuild: "0",
    courseEngName: ""
  },
  {
    schoolYear: "2022-2023",
    term: "1",
    courseNumber: "0303132007",
    courseName: "大学生创业基础",
    curriculum: "通识课程必修",
    courseOwner: "",
    credit: "1",
    gp: "4.50",
    score: "99",
    isMinor: "",
    makeUpScore: "",
    reBuildScore: "",
    college: "招生就业处",
    notes: "cjdr-20230106-gyf",
    isReBuild: "",
    courseEngName: ""
  },
  {
    schoolYear: "2021-2022",
    term: "2",
    courseNumber: "9005605010",
    courseName: "信息安全",
    curriculum: "校公共选修课",
    courseOwner: "校公共选修课",
    credit: "2.0",
    gp: "4.50",
    score: "优秀",
    isMinor: "0",
    makeUpScore: "",
    reBuildScore: "",
    college: "网络与通信工程学院",
    notes: "",
    isReBuild: "0",
    courseEngName: ""
  },
  {
    schoolYear: "2020-2021",
    term: "1",
    courseNumber: "0809113015",
    courseName: "大学计算机信息技术",
    curriculum: "通识课程必修",
    courseOwner: "",
    credit: "3.5",
    gp: "3.50",
    score: "89",
    isMinor: "0",
    makeUpScore: "",
    reBuildScore: "",
    college: "计算机工程学院",
    notes: "",
    isReBuild: "0",
    courseEngName: ""
  },
  {
    schoolYear: "2022-2023",
    term: "1",
    courseNumber: "0303132007",
    courseName: "大学生创业基础",
    curriculum: "通识课程必修",
    courseOwner: "",
    credit: "1",
    gp: "4.50",
    score: "99",
    isMinor: "",
    makeUpScore: "",
    reBuildScore: "",
    college: "招生就业处",
    notes: "cjdr-20230106-gyf",
    isReBuild: "",
    courseEngName: ""
  },
  {
    schoolYear: "2021-2022",
    term: "2",
    courseNumber: "9005605010",
    courseName: "信息安全",
    curriculum: "校公共选修课",
    courseOwner: "校公共选修课",
    credit: "2.0",
    gp: "4.50",
    score: "优秀",
    isMinor: "0",
    makeUpScore: "",
    reBuildScore: "",
    college: "网络与通信工程学院",
    notes: "",
    isReBuild: "0",
    courseEngName: ""
  },
  {
    schoolYear: "2020-2021",
    term: "1",
    courseNumber: "0809113015",
    courseName: "大学计算机信息技术",
    curriculum: "通识课程必修",
    courseOwner: "",
    credit: "3.5",
    gp: "3.50",
    score: "89",
    isMinor: "0",
    makeUpScore: "",
    reBuildScore: "",
    college: "计算机工程学院",
    notes: "",
    isReBuild: "0",
    courseEngName: ""
  },
  {
    schoolYear: "2022-2023",
    term: "1",
    courseNumber: "0303132007",
    courseName: "大学生创业基础",
    curriculum: "通识课程必修",
    courseOwner: "",
    credit: "1",
    gp: "4.50",
    score: "99",
    isMinor: "",
    makeUpScore: "",
    reBuildScore: "",
    college: "招生就业处",
    notes: "cjdr-20230106-gyf",
    isReBuild: "",
    courseEngName: ""
  },
  {
    schoolYear: "2021-2022",
    term: "2",
    courseNumber: "9005605010",
    courseName: "信息安全",
    curriculum: "校公共选修课",
    courseOwner: "校公共选修课",
    credit: "2.0",
    gp: "4.50",
    score: "优秀",
    isMinor: "0",
    makeUpScore: "",
    reBuildScore: "",
    college: "网络与通信工程学院",
    notes: "",
    isReBuild: "0",
    courseEngName: ""
  },
  {
    schoolYear: "2021-2022",
    term: "2",
    courseNumber: "9005605010",
    courseName: "信息安全",
    curriculum: "校公共选修课",
    courseOwner: "校公共选修课",
    credit: "2.0",
    gp: "4.50",
    score: "优秀",
    isMinor: "0",
    makeUpScore: "",
    reBuildScore: "",
    college: "网络与通信工程学院",
    notes: "",
    isReBuild: "0",
    courseEngName: ""
  },
  {
    schoolYear: "2020-2021",
    term: "1",
    courseNumber: "0809113015",
    courseName: "大学计算机信息技术",
    curriculum: "通识课程必修",
    courseOwner: "",
    credit: "3.5",
    gp: "3.50",
    score: "89",
    isMinor: "0",
    makeUpScore: "",
    reBuildScore: "",
    college: "计算机工程学院",
    notes: "",
    isReBuild: "0",
    courseEngName: ""
  },
  {
    schoolYear: "2022-2023",
    term: "1",
    courseNumber: "0303132007",
    courseName: "大学生创业基础",
    curriculum: "通识课程必修",
    courseOwner: "",
    credit: "1",
    gp: "4.50",
    score: "99",
    isMinor: "",
    makeUpScore: "",
    reBuildScore: "",
    college: "招生就业处",
    notes: "cjdr-20230106-gyf",
    isReBuild: "",
    courseEngName: ""
  },
  {
    schoolYear: "2021-2022",
    term: "2",
    courseNumber: "9005605010",
    courseName: "信息安全",
    curriculum: "校公共选修课",
    courseOwner: "校公共选修课",
    credit: "2.0",
    gp: "4.50",
    score: "优秀",
    isMinor: "0",
    makeUpScore: "",
    reBuildScore: "",
    college: "网络与通信工程学院",
    notes: "",
    isReBuild: "0",
    courseEngName: ""
  },
  {
    schoolYear: "2022-2023",
    term: "1",
    courseNumber: "0303132007",
    courseName: "大学生创业基础",
    curriculum: "通识课程必修",
    courseOwner: "",
    credit: "1",
    gp: "4.50",
    score: "99",
    isMinor: "",
    makeUpScore: "",
    reBuildScore: "",
    college: "招生就业处",
    notes: "cjdr-20230106-gyf",
    isReBuild: "",
    courseEngName: ""
  },
  {
    schoolYear: "2021-2022",
    term: "2",
    courseNumber: "9005605010",
    courseName: "信息安全",
    curriculum: "校公共选修课",
    courseOwner: "校公共选修课",
    credit: "2.0",
    gp: "4.50",
    score: "优秀",
    isMinor: "0",
    makeUpScore: "",
    reBuildScore: "",
    college: "网络与通信工程学院",
    notes: "",
    isReBuild: "0",
    courseEngName: ""
  },
  {
    schoolYear: "2020-2021",
    term: "1",
    courseNumber: "0809113015",
    courseName: "大学计算机信息技术",
    curriculum: "通识课程必修",
    courseOwner: "",
    credit: "3.5",
    gp: "3.50",
    score: "89",
    isMinor: "0",
    makeUpScore: "",
    reBuildScore: "",
    college: "计算机工程学院",
    notes: "",
    isReBuild: "0",
    courseEngName: ""
  },
  {
    schoolYear: "2022-2023",
    term: "1",
    courseNumber: "0303132007",
    courseName: "大学生创业基础",
    curriculum: "通识课程必修",
    courseOwner: "",
    credit: "1",
    gp: "4.50",
    score: "99",
    isMinor: "",
    makeUpScore: "",
    reBuildScore: "",
    college: "招生就业处",
    notes: "cjdr-20230106-gyf",
    isReBuild: "",
    courseEngName: ""
  },
  {
    schoolYear: "2021-2022",
    term: "2",
    courseNumber: "9005605010",
    courseName: "信息安全",
    curriculum: "校公共选修课",
    courseOwner: "校公共选修课",
    credit: "2.0",
    gp: "4.50",
    score: "优秀",
    isMinor: "0",
    makeUpScore: "",
    reBuildScore: "",
    college: "网络与通信工程学院",
    notes: "",
    isReBuild: "0",
    courseEngName: ""
  },
  {
    schoolYear: "2020-2021",
    term: "1",
    courseNumber: "0809113015",
    courseName: "大学计算机信息技术",
    curriculum: "通识课程必修",
    courseOwner: "",
    credit: "3.5",
    gp: "3.50",
    score: "89",
    isMinor: "0",
    makeUpScore: "",
    reBuildScore: "",
    college: "计算机工程学院",
    notes: "",
    isReBuild: "0",
    courseEngName: ""
  },
  {
    schoolYear: "2022-2023",
    term: "1",
    courseNumber: "0303132007",
    courseName: "大学生创业基础",
    curriculum: "通识课程必修",
    courseOwner: "",
    credit: "1",
    gp: "4.50",
    score: "99",
    isMinor: "",
    makeUpScore: "",
    reBuildScore: "",
    college: "招生就业处",
    notes: "cjdr-20230106-gyf",
    isReBuild: "",
    courseEngName: ""
  },
  {
    schoolYear: "2021-2022",
    term: "2",
    courseNumber: "9005605010",
    courseName: "信息安全",
    curriculum: "校公共选修课",
    courseOwner: "校公共选修课",
    credit: "2.0",
    gp: "4.50",
    score: "优秀",
    isMinor: "0",
    makeUpScore: "",
    reBuildScore: "",
    college: "网络与通信工程学院",
    notes: "",
    isReBuild: "0",
    courseEngName: ""
  },
  {
    schoolYear: "2021-2022",
    term: "2",
    courseNumber: "9005605010",
    courseName: "信息安全",
    curriculum: "校公共选修课",
    courseOwner: "校公共选修课",
    credit: "2.0",
    gp: "4.50",
    score: "优秀",
    isMinor: "0",
    makeUpScore: "",
    reBuildScore: "",
    college: "网络与通信工程学院",
    notes: "",
    isReBuild: "0",
    courseEngName: ""
  },
  {
    schoolYear: "2020-2021",
    term: "1",
    courseNumber: "0809113015",
    courseName: "大学计算机信息技术",
    curriculum: "通识课程必修",
    courseOwner: "",
    credit: "3.5",
    gp: "3.50",
    score: "89",
    isMinor: "0",
    makeUpScore: "",
    reBuildScore: "",
    college: "计算机工程学院",
    notes: "",
    isReBuild: "0",
    courseEngName: ""
  },
  {
    schoolYear: "2022-2023",
    term: "1",
    courseNumber: "0303132007",
    courseName: "大学生创业基础",
    curriculum: "通识课程必修",
    courseOwner: "",
    credit: "1",
    gp: "4.50",
    score: "99",
    isMinor: "",
    makeUpScore: "",
    reBuildScore: "",
    college: "招生就业处",
    notes: "cjdr-20230106-gyf",
    isReBuild: "",
    courseEngName: ""
  },
  {
    schoolYear: "2021-2022",
    term: "2",
    courseNumber: "9005605010",
    courseName: "信息安全",
    curriculum: "校公共选修课",
    courseOwner: "校公共选修课",
    credit: "2.0",
    gp: "4.50",
    score: "优秀",
    isMinor: "0",
    makeUpScore: "",
    reBuildScore: "",
    college: "网络与通信工程学院",
    notes: "",
    isReBuild: "0",
    courseEngName: ""
  }
];

// 未通过课程
const unPassCourse = [
  {
    courseNumber: "0807516043",
    courseName: "光通信技术",
    credit: "3",
    curriculum: "任选课",
    highestScore: "50",
    courseOwner: ""
  }
];

// 学分修读情况
const creditState = [
  {
    curriculum: "必修课",
    credit: "31",
    creditGetted: "42",
    creditUnPassed: "0",
    creditSub: "0"
  },
  {
    curriculum: "校公共选修课",
    credit: "10",
    creditGetted: "11",
    creditUnPassed: "0",
    creditSub: "0"
  },
  {
    curriculum: "限选课",
    credit: "11.50",
    creditGetted: "11.50",
    creditUnPassed: "0",
    creditSub: "0"
  },
  {
    curriculum: "任选课",
    credit: "10",
    creditGetted: "3.50",
    creditUnPassed: "3",
    creditSub: "6.50"
  },
  {
    curriculum: "集中性实践",
    credit: "35",
    creditGetted: "15",
    creditUnPassed: "0",
    creditSub: "20"
  },
  {
    curriculum: "课外培养必选",
    credit: "7",
    creditGetted: "1",
    creditUnPassed: "0",
    creditSub: "6"
  },
  {
    curriculum: "课外培养任选",
    credit: "3",
    creditGetted: "0",
    creditUnPassed: "0",
    creditSub: "3"
  },
  {
    curriculum: "通识课程必修",
    credit: "72.50",
    creditGetted: "59.50",
    creditUnPassed: "0",
    creditSub: "13"
  },
  {
    curriculum: "通识课程选修",
    credit: "0",
    creditGetted: "0",
    creditUnPassed: "0",
    creditSub: "0"
  }
];

// 调、停（补）课信息
const changeCourseData = [
  {
    courseNumber: "调0250",
    courseName: "思想道德修养与法律基础",
    oldInfo: "周1第7节连续2节{第7-7周}/1332（多媒体）/陈光连",
    newInfo: "周7第5节连续2节{第10-10周双周}/1332（多媒体）/陈光连",
    applyTime: "2020-10-10-21-15"
  },
  {
    courseNumber: "调0259",
    courseName: "思想道德修养与法律基础",
    oldInfo: "周5第5节连续2节{第7-7周}/6300（多媒体）/陈光连",
    newInfo: "周7第5节连续2节{第8-8周双周}/6300（多媒体）/陈光连",
    applyTime: "2020-10-12-08-54"
  }
];

// 实践课(或无上课时间)信息
const practCourseData = [
  {
    courseName: "毕业实习",
    teacherName: "朱荣刚",
    credit: "4",
    startEndWeek: "01-04",
    classTime: "",
    classLocation: ""
  }
];

// 未安排上课时间的课程
const unScheduledData = [
  {
    schoolYear: "2023-2024",
    term: "1",
    courseName: "毕业实习",
    teacherName: "朱荣刚",
    credit: "4"
  }
];

// 课表数据
const timeTableData = [
  {
    time: "早晨"
  },
  {
    time: "上午",
    section: "第1节",
    Monday: "123"
  },
  {
    time: "上午",
    section: "第2节",
    Monday: "123"
  },
  {
    time: "上午",
    section: "第3节",
    Monday: "123"
  },
  {
    time: "上午",
    section: "第4节",
    Monday: "123"
  },
  {
    time: "下午",
    section: "第5节",
    Monday: "123"
  },
  {
    time: "下午",
    section: "第6节",
    Monday: "123"
  },
  {
    time: "下午",
    section: "第7节",
    Monday: "123"
  },
  {
    time: "下午",
    section: "第8节",
    Monday: "123"
  },
  {
    time: "下午",
    section: "第9节",
    Monday: "123"
  },
  {
    time: "晚上",
    section: "第10节",
    Monday: "123"
  },
  {
    time: "晚上",
    section: "第11节",
    Monday: "123"
  },
  {
    time: "晚上",
    section: "第12节",
    Monday: "123"
  }
];

export {
  examData,
  schoolYear,
  term,
  gradeData,
  courseSelData,
  eduProgramData,
  scoreData,
  unPassCourse,
  creditState,
  changeCourseData,
  practCourseData,
  unScheduledData,
  timeTableData
};
