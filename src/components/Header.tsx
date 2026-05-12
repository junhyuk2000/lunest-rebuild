import { Link } from 'react-router-dom'

const navItems = [
  {
    label: '음악',
    sub: [
      { label: '수면', to: '/sleep' },
      { label: '휴식과 명상', to: '/rest' },
    ],
  },
  {
    label: '오늘을 담다',
    sub: [
      { label: '오늘의 추천', to: '/recommend' },
      { label: '오늘의 기록', to: '/today-record' },
    ],
  },
  {
    label: '마이페이지',
    sub: [{ label: '즐겨찾기', to: '/favorite' }],
  },
  {
    label: '브랜드소개',
    sub: [{ label: '브랜드', to: '/brand' }],
  },
]

export default function Header() {
    return (
        <header>
            <h1>
                <Link to="/">
                    <img src="/images/index/logo.png" alt="Lunest 로고" />
                </Link>
            </h1>
            <nav>
                <ul>
                    {navItems.map((item)=>(
                        <li key={item.label}>
                            {item.label}
                            <ul>
                                {item.sub.map((s)=>(
                                    <li key={s.to}>
                                        <Link to={s.to}>{s.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}