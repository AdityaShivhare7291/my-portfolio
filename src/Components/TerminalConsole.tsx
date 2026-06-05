import { Modal } from "@mantine/core";
import { useDisclosure, useHotkeys } from "@mantine/hooks";
import { useEffect, useMemo, useRef, useState } from "react";
import { Info, ProjectInfo, SkillInfo } from "../User";

type ConsoleEntry = {
  command: string;
  output: string[];
  tone?: "normal" | "success" | "error";
};

const QUICK_COMMANDS = [
  "help",
  "about",
  "skills",
  "experience",
  "projects",
  "contact",
  "download resume",
  "github",
];

const PALETTE_ACTIONS = [
  { label: "Go to About", value: "about" },
  { label: "Go to Skills", value: "skills" },
  { label: "Go to Experience", value: "experience" },
  { label: "Go to Projects", value: "projects" },
  { label: "Go to Contact", value: "contact" },
  { label: "Download Resume", value: "download resume" },
  { label: "Open GitHub", value: "github" },
  { label: "Open LinkedIn", value: "linkedin" },
];

const INITIAL_HISTORY: ConsoleEntry[] = [
  {
    command: "codex analyze portfolio",
    tone: "success",
    output: [
      "✓ Scanning experience",
      "✓ Matching skills",
      `✓ Found ${ProjectInfo.length} production projects`,
      "✓ Resume ready",
    ],
  },
  {
    command: "help",
    output: [
      "Available commands:",
      "help | about | skills | experience | projects | contact | clear",
      "download resume | github | linkedin | ask: what projects has Aditya built?",
    ],
  },
];

const TerminalConsole = () => {
  const [history, setHistory] = useState<ConsoleEntry[]>(INITIAL_HISTORY);
  const [command, setCommand] = useState("");
  const [status, setStatus] = useState("agent idle");
  const [opened, { open, close }] = useDisclosure(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const paletteInputRef = useRef<HTMLInputElement>(null);
  const historyRef = useRef<HTMLDivElement>(null);
  const resumeRef = useRef<HTMLAnchorElement>(null);

  const commandCount = history.length;

  const appendEntry = (entry: ConsoleEntry) => {
    setHistory((current) => [...current, entry]);
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      return true;
    }
    return false;
  };

  const executeCommand = (rawCommand: string) => {
    const cleaned = rawCommand.trim();
    const normalized = cleaned.toLowerCase().replace(/\s+/g, " ");
    if (!normalized) return;

    setStatus(`running: ${normalized}`);

    if (normalized === "clear") {
      setHistory([]);
      setCommand("");
      setStatus("session cleared");
      return;
    }

    const entry: ConsoleEntry = {
      command: cleaned,
      output: [],
      tone: "normal",
    };

    if (normalized === "help") {
      entry.output = [
        "Available commands:",
        "help | about | skills | experience | projects | contact | clear",
        "download resume | github | linkedin",
        "ask: what projects has Aditya built?",
      ];
    } else if (normalized === "about") {
      scrollToSection("About");
      entry.output = [
        "loading profile...",
        Info.bio,
      ];
      entry.tone = "success";
    } else if (normalized === "skills") {
      scrollToSection("Skills");
      entry.output = [
        "loading skills...",
        "done.",
        ...SkillInfo.map((group) => `${group.title}: ${group.skills.slice(0, 5).join(", ")}`),
      ];
      entry.tone = "success";
    } else if (normalized === "experience") {
      scrollToSection("Experience");
      entry.output = [
        "loading experience...",
        "done.",
        "3 timeline entries loaded from experience.log",
      ];
      entry.tone = "success";
    } else if (normalized === "projects") {
      scrollToSection("Projects");
      entry.output = [
        "loading projects...",
        "done.",
        ...ProjectInfo.map((project, index) => `${index + 1}. ${project.title}`),
      ];
      entry.tone = "success";
    } else if (normalized === "contact") {
      scrollToSection("Contact");
      entry.output = [
        "opening contact form...",
        "ready for collaboration.",
      ];
      entry.tone = "success";
    } else if (normalized === "resume" || normalized === "download resume") {
      resumeRef.current?.click();
      entry.output = ["resume download initialized."];
      entry.tone = "success";
    } else if (normalized === "github") {
      window.open("https://github.com/AdityaShivhare7291/", "_blank", "noopener,noreferrer");
      entry.output = ["opening github profile..."];
      entry.tone = "success";
    } else if (normalized === "linkedin") {
      window.open("https://www.linkedin.com/in/aditya-shivhare-5b0314226/", "_blank", "noopener,noreferrer");
      entry.output = ["opening linkedin profile..."];
      entry.tone = "success";
    } else if (normalized === "codex analyze portfolio") {
      entry.output = [
        "✓ Scanning experience",
        "✓ Matching skills",
        `✓ Found ${ProjectInfo.length} production projects`,
        "✓ Resume ready",
      ];
      entry.tone = "success";
    } else if (normalized.startsWith("ask:")) {
      if (normalized.includes("what projects") || normalized.includes("project")) {
        entry.output = ProjectInfo.map((project) => `${project.title}: ${project.desc}`);
        entry.tone = "success";
      } else if (normalized.includes("skills")) {
        entry.output = SkillInfo.map((group) => `${group.title}: ${group.skills.join(", ")}`);
        entry.tone = "success";
      } else {
        entry.output = ["Try asking about projects, skills, experience, or resume."];
      }
    } else {
      entry.output = [
        `command not found: ${cleaned}`,
        "Try: help",
      ];
      entry.tone = "error";
    }

    appendEntry(entry);
    setCommand("");
    setStatus(`completed: ${normalized}`);
    setTimeout(() => setStatus("agent idle"), 1200);
  };

  const filteredActions = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return PALETTE_ACTIONS;
    return PALETTE_ACTIONS.filter((action) => action.label.toLowerCase().includes(term));
  }, [query]);

  useHotkeys([["mod+K", () => open()]]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    historyRef.current?.scrollTo({
      top: historyRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [history]);

  useEffect(() => {
    if (opened) {
      setTimeout(() => {
        paletteInputRef.current?.focus();
      }, 0);
    }
  }, [opened]);

  return (
    <>
      <section className="terminal-shell terminal-session-shell my-2 font-mono">
        <div className="terminal-inner">
          <div className="terminal-session-header">
            <div>
              <div className="section-title !mb-2 !text-left !text-3xl sm-mx:!text-2xl">
                <span className="section-kicker">01.5&nbsp;</span>Terminal Session
              </div>
              <p className="terminal-copy max-w-2xl">
                Run commands, jump to sections, inspect projects, and trigger actions like a live Codex-style terminal.
              </p>
            </div>
            <div className="terminal-session-meta">
              <div className="terminal-tag">status: {status}</div>
              <button
                type="button"
                onClick={open}
                className="terminal-tag transition hover:bg-primaryColor/10"
              >
                Ctrl + K
              </button>
            </div>
          </div>

          <div className="terminal-session-grid">
            <div className="terminal-console terminal-console-large">
              <div className="terminal-console-topbar">
                <span>session://codex-agent</span>
                <span>{commandCount} commands</span>
              </div>

              <div ref={historyRef} className="terminal-console-history terminal-console-history-large">
                {history.map((entry, index) => (
                  <div key={`${entry.command}-${index}`} className="terminal-entry">
                    <div className="terminal-console-command">$ {entry.command}</div>
                    {entry.output.map((line, lineIndex) => (
                      <div
                        key={lineIndex}
                        className={`terminal-console-output ${entry.tone === "error" ? "terminal-console-output-error" : ""} ${entry.tone === "success" ? "terminal-console-output-success" : ""}`}
                      >
                        {line}
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              <form
                className="terminal-console-inputbar"
                onSubmit={(event) => {
                  event.preventDefault();
                  executeCommand(command);
                }}
              >
                <span className="terminal-console-prefix">$</span>
                <input
                  ref={inputRef}
                  value={command}
                  onChange={(event) => setCommand(event.currentTarget.value)}
                  placeholder="type command: help"
                  className="terminal-console-input"
                />
                <button type="submit" className="terminal-run-button">
                  Run
                </button>
              </form>
            </div>

            <aside className="terminal-side-panel">
              <div className="terminal-side-block">
                <div className="terminal-side-title">Quick Commands</div>
                <div className="terminal-chip-list">
                  {QUICK_COMMANDS.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => executeCommand(item)}
                      className="terminal-command-chip"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div className="terminal-side-block">
                <div className="terminal-side-title">Agent Notes</div>
                <div className="terminal-side-log">Use `ask: what projects has Aditya built?`</div>
                <div className="terminal-side-log">Use `download resume` for the PDF.</div>
                <div className="terminal-side-log">Use `Ctrl + K` for quick navigation.</div>
              </div>

              <div className="terminal-side-block">
                <div className="terminal-side-title">Live Stats</div>
                <div className="terminal-stat-row">
                  <span>projects</span>
                  <span>{ProjectInfo.length}</span>
                </div>
                <div className="terminal-stat-row">
                  <span>skill groups</span>
                  <span>{SkillInfo.length}</span>
                </div>
                <div className="terminal-stat-row">
                  <span>resume</span>
                  <span>ready</span>
                </div>
              </div>
            </aside>
          </div>

          <a
            ref={resumeRef}
            href="AdityaShivhareResume.pdf"
            download={Info.name}
            className="hidden"
          >
            download resume
          </a>
        </div>
      </section>

      <Modal opened={opened} onClose={close} centered title="Command Palette" className="font-mono">
        <div className="terminal-palette">
          <div className="terminal-console-inputbar">
            <span className="terminal-console-prefix">$</span>
            <input
              ref={paletteInputRef}
              value={query}
              onChange={(event) => setQuery(event.currentTarget.value)}
              placeholder="Go to About, Download Resume..."
              className="terminal-console-input"
              onKeyDown={(event) => {
                if (event.key === "Enter" && filteredActions[0]) {
                  event.preventDefault();
                  executeCommand(filteredActions[0].value);
                  close();
                }
              }}
            />
          </div>
          <div className="mt-4 flex flex-col gap-2">
            {filteredActions.map((action) => (
              <button
                key={action.value}
                type="button"
                onClick={() => {
                  executeCommand(action.value);
                  close();
                }}
                className="terminal-palette-item"
              >
                {action.label}
              </button>
            ))}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default TerminalConsole;
